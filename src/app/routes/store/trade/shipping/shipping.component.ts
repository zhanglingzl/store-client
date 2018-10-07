import { Component, OnInit } from '@angular/core';
import { Trade } from '../../../../model/trade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import { Product } from '../../../../model/product';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private modal: NzModalRef) { }
  trade: Trade;
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      trackingName: [
        null,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      trackingNo: [
        null,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ]
    });
    this.form.patchValue(this.trade);
  }

  close() {
    this.modal.destroy();
  }

  save() {
    this.trade = Object.assign(this.trade, this.form.value);
    this.modal.triggerOk();
  }

}
