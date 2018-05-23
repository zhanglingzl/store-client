import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleTableButton, SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { _HttpClient } from '@delon/theme';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { UserForm } from '../../../../dto';
import { User } from '../../../../model';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserViewComponent } from '../user-view/user-view.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  url = `/user`;
  query: UserForm;
  loading = false;
  expandForm = false;

  @ViewChild('st') st: SimpleTableComponent;
  columns: SimpleTableColumn[] = [
    { title: '编号', index: 'id.value', type: 'radio'},
    { title: '登录名', index: 'loginName', sorter: (a, b) => true, sortKey: 'direction', sort: 'ascend'},
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
          click: (record: any) => this.message.success(`成功删除【${record.name}】`)
        },
        {
          text: '编辑',
          type: 'modal',
          component: UserEditComponent,
          click: (record: any, modal: any) =>
            this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          text: '详情',
          type: 'static',
          component: UserViewComponent,
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

  constructor(private http: _HttpClient,
              public message: NzMessageService,
              private modalSrv: NzModalService,
              private router: Router) {}

  ngOnInit(): void {
    this.query = new UserForm();
    this.query.sorter = 'loginName';
  }

  sortChange(ret: any) {
    this.query.sorter = ret.column.indexKey;
  }

  reset(): void {
    const sorter = this.query.sorter;
    this.query = new UserForm();
    this.query.sorter = sorter;
    this.st.reset(this.query);
    console.log(this.query);

  }

  submit(): void {
    this.loading = true;
    this.st.load(1, this.query);
    this.loading = false;
  }

  add() {
    this.modalSrv.create(

    );
  }

}
