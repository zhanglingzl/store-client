import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
})
export class AgencyListComponent implements OnInit {

    params: any = {};
    url = `/agency`;
    searchSchema: SFSchema = {
      properties: {
        name: {
          type: 'string',
          title: '姓名'
        },
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '姓名', index: 'name' },
      { title: '类型', index: 'agencyType' },
      { title: '性别', width: '50px', index: 'gender' },
      { title: '手机号', index: 'telephone' },
      { title: '微信号', index: 'weChatNo' },
      { title: '身份证号', index: 'cardNo' },
      { title: '公司', index: 'company' },
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
