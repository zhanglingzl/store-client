import { Component, OnInit, ViewChild } from '@angular/core';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { Trade } from '../../../../model/trade';
import { _HttpClient } from '@delon/theme';
import { AGENCY_LEVER, PAY_STATUS, SHIP_STATUS } from '../../../../model/dictionary';
import { yuan } from '@delon/util';
import { RestResponse } from '../../../../dto';
import { tap } from 'rxjs/operators';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { ShippingComponent } from '../shipping/shipping.component';
import { format} from 'date-fns'

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styles  : []
})
export class TradeListComponent implements OnInit {
  params: any = {
    betweenDate: []
  };
  data: Trade[]= [];
  url = `/admin/trade/list`;
  loading = false;
  total: number;
  payOption = [
    {value: -1, label: '失败'},
    {value: 0, label: '待付款'},
    {value: 1, label: '支付成功'},
    {value: 2, label: '已完成'}
  ];
  @ViewChild('st') st: SimpleTableComponent;
  columns: SimpleTableColumn[] = [
    { title: '订单编号', width: '250px', fixed: 'left', index: 'tradeNo' },
    { title: '交易时间', index: 'createTime', type: 'date' },
    { title: '交易状态', index: 'payStatus', format: (cell: any) => `${PAY_STATUS[cell.payStatus]}`},
    { title: '会员姓名', index: 'agency.name', format: (cell: any) => `${cell.agency.name} ${cell.agency.id} (${AGENCY_LEVER[cell.agency.level]})`},
    { title: '交易金额', index: 'totalAmount', type: 'currency'},
    { title: '交易数量', index: 'totalCount'},
    { title: 'VIP会员优惠金额', index: 'discountAmount', format: (cell: any) => `${yuan(cell.discountAmount)}`},
    { title: '实付金额', index: 'payableAmount', type: 'currency'},
    { title: '收货人', index: 'name' },
    { title: '收货电话', index: 'phone' },
    { title: '收货地址', index: 'address', format: (cell: any) => `${cell.province} ${cell.city} ${cell.country} ${cell.address}`},
    { title: '发货状态', index: 'shipStatus', format: (cell: any) => `${SHIP_STATUS[cell.shipStatus]}`},
    { title: '物流公司', index: 'trackingName'},
    { title: '物流单号', index: 'trackingNo'},
    {
      title: '操作',
      width: '200px',
      buttons: [
        { text: '上传物流', click: (item: any) =>  this.getTrackingNo(item)},
        // { text: '上传二维码', click: (item: any) => this.getTrackingNo(item)},
      ],
      fixed: 'right'
    }
  ];

  constructor(private http: _HttpClient,
              private modalSrv: NzModalService,
              private msg: NzMessageService) { }

  ngOnInit() {
  }

  getData() {
    this.loading = true;
    this.http.get<RestResponse<Trade[]>>(this.url, this.params)
      .pipe(tap(() => this.loading = false))
      .subscribe( res => {
      this.data = res.result;
      this.total = res.result.length;
    });
  }

  getTrackingNo(item) {
    if(item.payStatus !== 1) {
      this.msg.warning("只有支付成功的订单需要上传物流信息");
      return;
    }
    if(item.shipStatus !== 0) {
      this.msg.warning("物流信息已上传");
      return;
    }
    this.modalSrv.create({
      nzTitle: '上传物流信息',
      nzContent: ShippingComponent,
      nzComponentParams: {
        trade: item
      },
      nzOkText: null,
      nzCancelText: null,
      nzWidth: 720,
      nzOnOk: (modalComponent) => {
        this.loading = true;
        this.http
          .put('/trade/updateShipping', {trade: modalComponent.trade})
          .subscribe(() => {
            this.msg.success('保存成功');
            this.getData();
          });

      },
    });
  }

  onChange(result: Date[]): void {
    this.params.betweenDate = [];
    result.forEach(value => {
      this.params.betweenDate.push(format(value, 'YYYY-MM-DD HH:mm:ss'));
    })
  }

}
