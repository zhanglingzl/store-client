import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {Router} from '@angular/router';
import {RoleEditComponent} from '../role-edit/role-edit.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {

    params: any = {};
    url = `/role`;
    searchSchema: SFSchema = {
      properties: {
        roleName: {
          type: 'string',
          title: '角色名称'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '角色名称', index: 'roleName' },
      { title: '描述', index: 'avatar' },
      { title: '是否可用', index: 'isAvailable' },
      { title: '创建时间', type: 'date', index: 'updatedAt' },
      {
        title: '',
        buttons: [
          { text: '查看', click: (item: any) => this.router.navigateByUrl(`/admin/role/${item.id}`) },
          { text: '编辑', type: 'static', component: RoleEditComponent, click: 'reload' },
        ]
      }
    ];

    constructor(private http: _HttpClient,
                private router: Router) { }

    ngOnInit() { }

}
