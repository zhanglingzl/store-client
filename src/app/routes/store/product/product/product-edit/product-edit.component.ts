import { Component, OnInit, ViewChild } from '@angular/core';
  import {NzModalRef, NzMessageService, UploadFile} from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';
  import { SFSchema, SFUISchema } from '@delon/form';
import {TransferService} from '../transfer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

  @Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.less'],
    providers: [TransferService]
  })
  export class ProductEditComponent implements OnInit {

    form: FormGroup;

    fileList = [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
    ];
    previewImage = '';
    previewVisible = false;

    constructor(
      private modal: NzModalRef,
      public msgSrv: NzMessageService,
      public http: _HttpClient,
      private fb: FormBuilder,
      public item: TransferService
    ) {}


    ngOnInit() {
      this.form = this.fb.group({
        productName: [
          null,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        specification: [null, [Validators.required]],
        description: [null, [Validators.required]],
        effect: [
          null,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        ingredient: [
          null,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        productPrice: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(`(^[1-9]([0-9]+)?(\\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\\.[0-9]([0-9])?$)`),
            Validators.min(1),
            Validators.max(10000 * 100),
          ]),
        ],
      });
      this.form.patchValue(this.item);
    }

    handlePreview = (file: UploadFile) => {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    };

    save() {
      // this.msgSrv.success('保存成功');
      this.item = this.form.value;
      this.modal.triggerOk();
    }

    close() {
      this.modal.destroy();
    }
  }
