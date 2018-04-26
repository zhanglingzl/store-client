import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {SimpleTableColumn, SimpleTableComponent, SimpleTableData} from "@delon/abc";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {map, tap} from "rxjs/operators";

import {User} from "../../../common/entities/user";
import {UserForm} from "../../../common/dto/user-form";
import {RestResponse} from "../../../common/dto/rest-response";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {

    query: UserForm = new UserForm();
    data: User[] = [];
    loading = false;
    status = [
        { index: 0, text: '关闭', value: false, type: 'default', checked: false },
        { index: 1, text: '运行中', value: false, type: 'processing', checked: false },
        { index: 2, text: '已上线', value: false, type: 'success', checked: false },
        { index: 3, text: '异常', value: false, type: 'error', checked: false }
    ];
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
        { title: '', index: 'key', type: 'checkbox' },
        { title: '规则编号', index: 'no' },
        { title: '描述', index: 'description' },
        {
            title: '服务调用次数', index: 'callNo', type: 'number', format: (item: any) => `${item.callNo} 万`,
            sorter: (a: any, b: any) => a.callNo - b.callNo
        },
        {
            title: '状态', index: 'status', render: 'status',
            filters: this.status,
            filter: () => true
        },
        {
            title: '更新时间', index: 'updatedAt', type: 'date',
            sorter: (a: any, b: any) => a.updatedAt - b.updatedAt
        },
        {
            title: '操作',
            buttons: [
                { text: '配置', click: (item: any) => this.msg.success(`配置${item.no}`) },
                { text: '订阅警报', click: (item: any) => this.msg.success(`订阅警报${item.no}`) }
            ]
        }
    ];
    selectedRows: SimpleTableData[] = [];
    description = '';
    totalCallNo = 0;
    expandForm = false;

    constructor(private http: _HttpClient,
                public msg: NzMessageService,
                private modalSrv: NzModalService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loading = true;
        this.query.statusList = this.status.filter(w => w.checked).map(item => item.index);
        if (this.query.status !== null && this.query.status > -1) this.query.statusList.push(this.query.status);
        this.http.get<RestResponse<User[]>>('/user', this.query)
            .pipe(
            // map((list: any[]) => list.map(i => {
            //     const statusItem = this.status[i.status];
            //     i.statusText = statusItem.text;
            //     i.statusType = statusItem.type;
            //     return i;
            // })),
            tap(() => this.loading = false))
        .subscribe(res => this.data = res.result);
    }

    checkboxChange(list: SimpleTableData[]) {
        this.selectedRows = list;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
    }

    remove() {
        this.http.delete('/rule',
            { nos: this.selectedRows.map(i => i.no).join(',') })
            .subscribe(() => {
            this.getData();
            this.st.clearCheck();
        });
    }

    approval() {
        this.msg.success(`审批了 ${this.selectedRows.length} 笔`);
    }

    add(tpl: TemplateRef<{}>) {
        this.modalSrv.create({
            nzTitle: '新建规则',
            nzContent: tpl,
            nzOnOk: () => {
                this.loading = true;
                this.http.post('/rule', { description: this.description })
                    .subscribe(() => {
                    this.getData();
                });
            }
        });
    }

    reset(ls: any[]) {
        for (const item of ls) item.value = false;
        this.getData();
    }

}
