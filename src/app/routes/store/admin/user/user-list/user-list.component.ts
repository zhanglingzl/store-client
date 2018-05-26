import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

    params: any = {};
    url = `/user`;
    searchSchema: SFSchema = {
      properties: {
        no: {
          type: 'string',
          title: '编号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '编号', index: 'no' },
      { title: '调用次数', type: 'number', index: 'callNo' },
      { title: '头像', type: 'img', width: '50px', index: 'avatar' },
      { title: '时间', type: 'date', index: 'updatedAt' },
      {
        title: '',
        buttons: [
          { text: '查看', click: (item: any) => this.router.navigateByUrl(`/admin/user/${item.id}`) },
          { text: '编辑', type: 'static', component: UserEditComponent, click: 'reload' },
        ]
      }
    ];

    constructor(private http: _HttpClient,
                private router: Router) { }

    ngOnInit() { }

}
