import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {Agency} from '../../../../../model/agency';
import {RestResponse} from '../../../../../dto';

@Component({
  selector: 'app-upgrade-list',
  templateUrl: './upgrade-list.component.html',
})
export class UpgradeListComponent implements OnInit {

  data: Agency[] = [];
  params: any = {name: '',telephone: ''};
  loading = false;

  @ViewChild('st') st: SimpleTableComponent;
  columns: SimpleTableColumn[] = [
    { title: '姓名', index: 'name' },
    { title: '性别', index: 'gender' },
    { title: '等级', index: 'level' },
    { title: '类型', index: 'type' },
    { title: '手机号', index: 'telephone' },
    { title: '微信号', index: 'wechatId' },
    { title: '身份证号', index: 'cardNo' },
    { title: '公司', index: 'company' },
    { title: '地址', index: 'address' },
    { title: '邮箱', index: 'email' },
    { title: '申请时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        { text: '升级', click: (item: any) =>{
            this.http.post('/agency/update', null,{id: item.id})
              .subscribe(() => this.getData());

          }
        },
        // { text: '查看', click: (item: any) => this.router.navigateByUrl(`/form/${item.id}`) },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  /**
   * 从服务获取数据
   */
  getData() {
    this.loading = true;
    this.http.get<RestResponse<Agency[]>>('/agency/quasi',this.params).subscribe(response => {
      this.data = response.result;
      this.loading = false;
    });
  }

  /**
   * 重置
   */
  reset() {
    this.params = {};
    this.getData();
  }


  constructor(private http: _HttpClient) { }

  ngOnInit() {
    this.getData();
  }

}
