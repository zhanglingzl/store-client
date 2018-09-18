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
    // nzAction="https://jsonplaceholder.typicode.com/posts/"
    form: FormGroup;
    product: Product;
    fileList: File[] = [];
    coverList: File[] = [];
    previewImage = '';
    previewVisible = false;
    formData: FormData = new FormData();

    constructor(
      private modal: NzModalRef,
      public msg: NzMessageService,
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
        amount: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(`(^[1-9]([0-9]+)?(\\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\\.[0-9]([0-9])?$)`),
            Validators.min(1),
            Validators.max(10000 * 100),
          ]),
        ],
        vipAmount: [
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
      /*let reader = new FileReader();
      reader.readAsDataURL(file);*/
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    };

    beforeUpload = (file: File) => {
      const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isImage) {
        this.msg.error('请选择图片!');
      }else {
        this.fileList.push(file);
      }
      /*const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
      }*/
      return false;
    };

    beforeUploadCover = (file: File) => {
      const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isImage) {
        this.msg.error('请选择图片!');
      }else {
        this.coverList.push(file);
      }
      return false;
    };

    getFormDate(){
      this.fileList.forEach((file: any) => {
        this.formData.append('imageList', file);
      });
      this.coverList.forEach((file: any) => {
        this.formData.append('coverList', file);
      });
    }

    save() {
      // this.msg.success('保存成功');
      this.getFormDate();
      this.product = Object.assign(this.product==null? new Product(): this.product, this.form.value);
      this.modal.triggerOk();
    }

    close() {
      this.modal.destroy();
    }


    get productNo() {
      return this.form.controls['productNo'];
    }
    get productName() {
      return this.form.controls['productName'];
    }
    get amount() {
      return this.form.controls['amount'];
    }
    get vipAmount() {
      return this.form.controls['vipAmount'];
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
