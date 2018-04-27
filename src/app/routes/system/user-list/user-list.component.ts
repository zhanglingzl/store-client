import {Component, OnInit, ViewChild} from '@angular/core';
import {SimpleTableButton, SimpleTableColumn, SimpleTableComponent} from "@delon/abc";
import {NzMessageService} from "ng-zorro-antd";


import {PageData, UserForm} from "../../../common/dto";
import {User} from "../../../common/entities";
import {of} from "rxjs/observable/of";
import {delay} from "rxjs/operators";
import {SimpleTableChange} from "@delon/abc/src/simple-table/interface";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
    pageData: PageData<User[]> = new PageData<User[]>();
    query: UserForm = new UserForm();
    @ViewChild('st') st: SimpleTableComponent;

    ngOnInit(): void {

        of(Array(95).fill({}).map((item: User, idx: number) => {
            item = {
                id: idx+1,
                loginName: `ceshi${idx+1}`,
                name: `测试${idx+1}`,
                state: 1,
                telephone: `123000123-${idx+1}`,
                wechat: `wechat-${idx+1}`

            };
            return item;
        })).pipe(delay(500)).subscribe(res => {
            this.pageData = {
                pageination: {
                    pageNumber: 10,
                    pageSize: 2,
                    total: 95
                },
                data: res
            };
        });
    }

    constructor(private message: NzMessageService) {}


    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value', type: 'radio'},
        { title: '登录名', index: 'loginName' },
        { title: '用户名', index: 'name' },
        { title: '状态', index: 'state' },
        { title: '电话', index: 'telephone' },
        { title: '微信', index: 'wechat' },
        {
            title: '操作区',
            buttons: [
                {
                    text: '删除',
                    type: 'del',
                    click: (record: any) => this.message.success(`成功删除【${record.name}】`),
                    if: (item: any, btn: SimpleTableButton,
                         column: SimpleTableColumn) => item.id % 2 === 0
                },
                {
                    text: '编辑',
                    type: 'modal',
                    component: UserListComponent,
                    click: (record: any, modal: any) =>
                        this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
                },
                {
                    text: '更多',
                    children: [
                        {
                            text: `过期`,
                            click: (record: any) => this.message.error(`过期【${record.name}】`),
                            format: (record: any) => `<i class="anticon anticon-frown-o"></i> 过期`
                        },
                        {
                            text: `重新开始`,
                            click: (record: any) => this.message.success(`重新开始【${record.name}】`)
                        }
                    ]
                }
            ]
        }
    ];

    getData( stc: SimpleTableChange): void {
       alert(stc.pi);
        alert(stc.ps);
    }
}
