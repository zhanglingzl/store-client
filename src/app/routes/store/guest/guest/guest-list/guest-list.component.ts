import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html'
})
export class GuestListComponent implements OnInit {

    params: any = {};
    url = `/guest`;
    searchSchema: SFSchema = {
      properties: {
        name: {
          type: 'string',
          title: '姓名'
        },
        agency: {
          type: 'string',
          title: '所属代理'
        },
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '姓名', index: 'name' },
      { title: '所属代理', index: 'agency' },
      { title: '性别', index: 'gender' },
      { title: '手机号', index: 'telephone' },
      { title: '微信号', index: 'weChatNo' },
      { title: '身份证号', index: 'cardNo' },
      { title: '地址', index: 'address' },
      { title: '邮箱', index: 'email' },
      { title: '时间', type: 'date', index: 'updatedAt' },
      {
        title: '',
        buttons: [
          // { text: '查看', click: (item: any) => this.router.navigateByUrl(`/form/${item.id}`) },
          // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
        ]
      }
    ];

    constructor(private http: _HttpClient) { }

    ngOnInit() { }

}
