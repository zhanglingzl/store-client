import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-agency-list',
  templateUrl: './repertory-list.component.html',
})
export class RepertoryListComponent implements OnInit {

    params: any = {};
    url = `/agency`;
    searchSchema: SFSchema = {
      properties: {
        productNo: {
          type: 'string',
          title: '商品编号'
        },
        productName: {
          type: 'string',
          title: '商品名称'
        },
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '商品编号', index: 'productNo' },
      { title: '商品名称', index: 'productName' },
      { title: '库存', index: 'repertory' },
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
