import { Component, OnInit, ViewChild } from '@angular/core';
  import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';
  import { SFSchema, SFUISchema } from '@delon/form';

  @Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
  })
  export class RoleEditComponent implements OnInit {
    record: any = {};
    i: any;
    schema: SFSchema = {
      properties: {
        no: { type: 'string', title: '编号', readOnly: true },
        owner: { type: 'string', title: '姓名', maxLength: 15 },
        callNo: { type: 'number', title: '调用次数' },
        href: { type: 'string', title: '链接', format: 'uri' },
        description: { type: 'string', title: '描述', maxLength: 140 },
      },
      required: ['owner', 'callNo', 'href', 'description'],
    };
    ui: SFUISchema = {
      '*': {
        spanLabelFixed: 100,
        grid: { span: 12 },
      },
      $href: {
        widget: 'string',
      },
      $description: {
        widget: 'textarea',
        grid: { span: 24 },
      },
    };

    constructor(
      private modal: NzModalRef,
      public msgSrv: NzMessageService,
      public http: _HttpClient,
    ) {}

    ngOnInit(): void {
      this.http.get(`/role/${this.record.id}`).subscribe(res => (this.i = res));
    }

    save(value: any) {
      this.http.post(`/role/${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }

    close() {
      this.modal.destroy();
    }
  }
