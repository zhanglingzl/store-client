import { Component, OnInit, ViewChild } from '@angular/core';
import {NzModalRef, NzMessageService, UploadFile, UploadXHRArgs} from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../../../model/product';
import {HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';

  @Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.less']
  })
  export class ProductEditComponent implements OnInit {
    form: FormGroup;
    product: Product;
    fileList: UploadFile[] = [];
    coverList: UploadFile[] = [];
    previewImage = '';
    previewVisible = false;

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
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    }

    customReq = (item: UploadXHRArgs) => {
      // 构建一个 FormData 对象，用于存储文件或其他参数
      const formData = new FormData();
      // tslint:disable-next-line:no-any
      formData.append('file', item.file as any);
      formData.append('uid', item.file.uid);
      // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
      return this.http.post('/product/fileUpload', formData, {
        reportProgress : true,
        withCredentials: true
      }).subscribe((event: HttpEvent<{}>) => {
        item.onSuccess(null, item.file, event);
      }, (err) => {
        // 处理失败
        item.onError(err, item.file);
      });
    }

    beforeUpload = (file: File) => {
      const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isImage) {
        this.msg.error('请选择图片!');
      }
      /*const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
      }*/
      return isImage;
    }

    save() {
      this.product = Object.assign(this.product == null ? new Product() : this.product, this.form.value);
      this.modal.triggerOk();
    }

    close() {
      this.modal.destroy();
    }

    setProductCoverAndImages() {
      this.product.cover = this.coverList.map(cover => cover.uid).toString();
      this.product.images = this.fileList.map(image => image.uid).toString();
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
