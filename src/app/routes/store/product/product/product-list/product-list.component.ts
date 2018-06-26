import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ProductEditComponent} from '../product-edit/product-edit.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductListComponent implements OnInit {

  params: any = {
    productName: '',
    categories: [],

  };

  list: any[] = ['null'];

  loading = true;

  // region: cateogry
  categories = [
    { id: 0, text: '全部', value: false },
    { id: 1, text: '类别一', value: false },
    { id: 2, text: '类别二', value: false },
    { id: 3, text: '类别三', value: false },
    { id: 4, text: '类别四', value: false },
    { id: 5, text: '类别五', value: false },
    { id: 6, text: '类别六', value: false },
    { id: 7, text: '类别七', value: false },
    { id: 8, text: '类别八', value: false },
    { id: 9, text: '类别九', value: false },
    { id: 10, text: '类别十', value: false },
    { id: 11, text: '类别十一', value: false },
  ];

  changeCategory(status: boolean, idx: number) {
    if (idx === 0) {
      this.categories.map(i => (i.value = status));
    } else {
      this.categories[idx].value = status;
    }
    this.getData();
  }
  // endregion
  constructor(private http: _HttpClient, public msg: NzMessageService, public modalSrv: NzModalService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get('/product', { productForm: this.params }).subscribe((res: any) => {
      // this.list = ['null'];
      this.list = this.list.concat(res.result);
      this.loading = false;
    });
  }

  i = {productName: '', effect: '', ingredient: ''};
  addProduct() {
    this.modalSrv.create({
      nzTitle: '新增商品',
      nzContent: ProductEditComponent,
      nzComponentParams: {
        i: {productName: '', effect: '',ingredient: ''}
      },
      nzOkText: null,
      nzCancelText: null,
      nzWidth: 720,
      nzOnOk: (modalComponent) => {
        this.loading = true;
        this.http
          .post('/product/saveOrUpdate', {record: modalComponent.i})
          .subscribe(() => {
            this.getData();
          });

      },
    });
  }
  remove(id) {
    this.http
      .delete('/product/delete', { id: id })
      .subscribe(() => {
        this.getData();
      });
  }

  updateProduct(item){
    console.log(item)
    this.modalSrv.create({
      nzTitle: '编辑商品',
      nzContent: ProductEditComponent,
      nzComponentParams: {
        i: {productName: item.productName, effect: item.effect,ingredient: item.ingredient}
      },
      nzOkText: null,
      nzCancelText: null,
      nzOnOk: (modalComponent) => {
        this.loading = true;
        this.http
          .put('/product/saveOrUpdate', {id:item.id,record: modalComponent.i})
          .subscribe(() => {
            this.getData();
          });

      },
    });
  }
}
