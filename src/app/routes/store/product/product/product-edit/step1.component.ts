import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransferService } from './transfer.service';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styles: [`
    :host ::ng-deep i {
      font-size: 32px;
      color: #999;
    }
    :host ::ng-deep .ant-upload-text {
      margin-top: 8px;
      color: #666;
    }
  `]
})
export class Step1Component implements OnInit {
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
  constructor(private fb: FormBuilder, public item: TransferService, private msg: NzMessageService) {}

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
          Validators.pattern(`[0-9]+`),
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
  }
  //#region get form fields
  get pay_account() {
    return this.form.controls['pay_account'];
  }
  get receiver_type() {
    return this.form.controls['receiver_type'];
  }
  get receiver_account() {
    return this.form.controls['receiver_account'];
  }
  get receiver_name() {
    return this.form.controls['receiver_name'];
  }
  get amount() {
    return this.form.controls['amount'];
  }
  //#endregion

  _submitForm() {
    this.item = Object.assign(this.item, this.form.value);
    ++this.item.step;
  }
}
