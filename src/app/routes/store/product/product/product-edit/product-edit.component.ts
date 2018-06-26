import { Component, OnInit, ViewChild } from '@angular/core';
  import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';
  import { SFSchema, SFUISchema } from '@delon/form';
import {TransferService} from './transfer.service';

  @Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.less'],
    providers: [TransferService],
  })
  export class ProductEditComponent implements OnInit {
    record: any = {};
    i: any;
    schema: SFSchema = {
      properties: {
        productName: { type: 'string', title: '商品名称' },
        effect: { type: 'string', title: '商品作用', maxLength: 140 },
        ingredient: { type: 'string', title: '商品成分', maxLength: 140 },
      },
      required: ['productName', 'effect', 'ingredient'],
    };
    ui: SFUISchema = {
      '*': {
        spanLabelFixed: 100,
        grid: { span: 12 },
      },
      $effect: {
        widget: 'textarea',
        grid: { span: 24 },
      },
      $ingredient: {
        widget: 'textarea',
        grid: { span: 24 },
      },

    };

    constructor(
      private modal: NzModalRef,
      public msgSrv: NzMessageService,
      public http: _HttpClient,
      public item: TransferService
    ) {}

    ngOnInit(): void {
      // this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    }

    save(value: any) {
      this.i = value;
      this.msgSrv.success('保存成功');
      this.modal.triggerOk();
    }

    close() {
      this.modal.destroy();
    }
  }
