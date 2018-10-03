import { Component, OnInit, ViewChild } from '@angular/core';
import { SFSchema } from '@delon/form';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { Trade } from '../../../../model/trade';
import { _HttpClient } from '@delon/theme';
import { AGENCY_LEVER, PAY_STATUS, SHIP_STATUS } from '../../../../model/dictionary';
import { yuan } from '@delon/util';

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styles: []
})
export class TradeListComponent implements OnInit {
  params: any = {name: ''};
  data: Trade[]= [];
  url = `/admin/trade/list`;
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '姓名'
      }
    }
  };
  @ViewChild('st') st: SimpleTableComponent;
  columns: SimpleTableColumn[] = [
    { title: '订单编号', width: '250px', fixed: 'left', index: 'tradeNo' },
    { title: '交易时间', index: 'createTime', type: 'date' },
    { title: '交易状态', index: 'payStatus', format: (cell: any) => `${PAY_STATUS[cell.payStatus]}`},
    { title: '会员姓名', index: 'agency.name', format: (cell: any) => `${cell.agency.name}
     ${cell.agency.id} (${AGENCY_LEVER[cell.agency.level]})`},
    { title: '交易金额', index: 'totalAmount', format: (cell: any) => `${yuan(cell.totalAmount)}`},
    { title: '交易数量', index: 'totalCount'},
    { title: 'VIP会员优惠金额', index: 'discountAmount', format: (cell: any) => `${yuan(cell.discountAmount)}`},
    { title: '实付金额', index: 'payableAmount', format: (cell: any) => `${yuan(cell.payableAmount)}`},
    { title: '收货人', index: 'name' },
    { title: '收货电话', index: 'phone' },
    { title: '收货地址', render: 'shipAddress' },
    { title: '发货状态', index: 'shipStatus', format: (cell: any) => `${SHIP_STATUS[cell.shipStatus]}`},
    { title: '物流公司', index: 'trackingName'},
    { title: '物流单号', index: 'trackingNo'},
    {
      title: '操作',
      width: '200px',
      buttons: [
        // { text: '查看', click: (item: any) => this.router.navigateByUrl(`/form/${item.id}`) },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ],
      fixed: 'right'
    }
  ];

  constructor(private http: _HttpClient) { }

  ngOnInit() {
  }

  submit(query) {
    console.log(query);
    this.st.reload(query);
  }
}
