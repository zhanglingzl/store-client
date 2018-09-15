import { Component, OnInit, ViewChild } from '@angular/core';
  import {NzModalRef, NzMessageService, UploadFile} from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';
  import { SFSchema, SFUISchema } from '@delon/form';
import {TransferService} from '../transfer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../../../model/product';

  @Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.less']
  })
  export class ProductEditComponent implements OnInit {

    form: FormGroup;
    product: Product;
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
    ) {}


    ngOnInit() {
      this.form = this.fb.group({
        productNo: [
          null,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        productName: [
          null,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        // specification: [null, [Validators.required]],
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
      this.form.patchValue(this.product);
    }

    handlePreview = (file: UploadFile) => {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    };

    save() {
      // this.msgSrv.success('保存成功');
      this.product = Object.assign(this.product==null? new Product(): this.product, this.form.value);
      this.modal.triggerOk();
    }

    close() {
      alert(this.form.valid);
      this.modal.destroy();
    }


    get productNo() {
      return this.form.controls['productNo'];
    }
    get productName() {
      return this.form.controls['productName'];
    }
    get productPrice() {
      return this.form.controls['productPrice'];
    }
    get description() {
      return this.form.controls['description'];
    }
    get effect() {
      return this.form.controls['effect'];
    }
    get ingredient() {
      return this.form.controls['ingredient'];
    }

  }
