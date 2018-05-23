import { Component, OnInit, ViewChild } from '@angular/core';
  import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';
  import { SFSchema, SFUISchema } from '@delon/form';

import { RestResponse } from '../../../../dto';
import { User } from '../../../../model';

  @Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html'
  })
  export class UserEditComponent implements OnInit {
    record: any = {};
    user: User;
    schema: SFSchema = {

      properties: {
        loginName: { type: 'string', title: '登陆名', readOnly: true },

      }
      // properties: {
      //   no: { type: 'string', title: '编号', readOnly: true },
      //   loginName: { type: 'string', title: '姓名', maxLength: 15 },
      //   callNo: { type: 'number', title: '调用次数' },
      //   href: { type: 'string', title: '链接', format: 'uri' },
      //   description: { type: 'string', title: '描述', maxLength: 140 },
      // },
      // required: ['owner', 'callNo', 'href', 'description'],
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
      this.http.get<RestResponse<User>>(`/user/${this.record.id}`)
        .subscribe(res => (this.user = res.result));
    }

    save(value: any) {
      this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }

    close() {
      this.modal.destroy();
    }
  }
