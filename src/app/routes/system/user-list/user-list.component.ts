import {Component, OnInit, ViewChild} from '@angular/core';
import {SimpleTableButton, SimpleTableColumn, SimpleTableComponent} from "@delon/abc";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {_HttpClient} from "@delon/theme";
import {UserForm} from "../../../common/dto";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
    url: string = `/user`;
    query: UserForm;
    loading:boolean = false;
    expandForm:boolean = false;
    @ViewChild('st') st: SimpleTableComponent;

    ngOnInit(): void {
        this.query = new UserForm();
        this.query.sorter='loginName';
    }

    constructor(private http: _HttpClient,
                public message: NzMessageService,
                private modalSrv: NzModalService) {}


    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value', type: 'radio'},
        { title: '登录名', index: 'loginName', sorter: (a, b) => true, sortKey: 'direction', sort:"ascend"},
        { title: '用户名', index: 'name',  sorter: (a, b) => true, sortKey: 'direction'},
        { title: '状态', index: 'state' },
        { title: '电话', index: 'telephone' },
        { title: '微信', index: 'wechat' },
        { title: '创建时间', index: 'createTime', type: 'date' },
        { title: '创建人', index: 'createOperator' },
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

    sortChange(ret: any) {
        this.query.sorter=ret.column.indexKey;
    }

    reset(): void {
       const sorter = this.query.sorter;
       this.query = new UserForm();
       this.query.sorter = sorter;
        this.st.reset(this.query);
        console.log(this.query);

    }

    submit(): void {
        this.loading=true;
        this.st.load(1,this.query);
        // this.loading=false;
    }

    dataChange() {

    }

}
