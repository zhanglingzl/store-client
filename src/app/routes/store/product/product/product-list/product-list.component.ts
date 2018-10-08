import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ProductEditComponent} from '../product-edit/product-edit.component';
import {Product} from '../../../../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product.component.less'],
  providers: []
})
export class ProductListComponent implements OnInit {

  params: any = {
    productName: '',
    categories: [],

  };

  list: any[] = ['null'];

  loading = true;

  // endregion
  constructor(private http: _HttpClient,
              public msg: NzMessageService,
              public modalSrv: NzModalService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get('/product', { productForm: this.params }).subscribe((res: any) => {
      this.list = ['null'];
      this.list = this.list.concat(res.result);
      this.loading = false;
    });
  }


  addProduct() {
    this.modalSrv.create({
      nzTitle: '新增商品',
      nzContent: ProductEditComponent,
      nzComponentParams: {
        item: new Product()
      },
      nzOkText: null,
      nzCancelText: null,
      nzWidth: 720,
      nzOnOk: (modalComponent) => {
        this.loading = true;
        this.http
          .post('/product/saveOrUpdate', modalComponent.product)
          .subscribe(() => {
            this.msg.success('保存成功');
            this.getData();
          });

      },
    });
  }
  remove(item) {
    this.http
      .post('/product/delete', item)
      .subscribe(() => {
        this.getData();
      });
  }

  updateProduct(item) {
    // this.item = item;
    this.modalSrv.create({
      nzTitle: '编辑商品',
      nzContent: ProductEditComponent,
      nzComponentParams: {
        product: item
      },
      nzOkText: null,
      nzCancelText: null,
      nzWidth: 720,
      nzOnOk: (modalComponent) => {
        this.loading = true;
        this.http
          .post('/product/saveOrUpdate', modalComponent.product)
          .subscribe(() => {
            this.getData();
          });

      },
    });
  }
}
