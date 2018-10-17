import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {RestResponse} from '../../../../../dto';
import {Agency} from '../../../../../model/agency';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styles: [
    `
      :host ::ng-deep .ant-card-meta-title {
        margin-bottom: 12px;
      }
    `,
  ]
})
export class CardListComponent implements OnInit {

  list: Agency[] = [];

  loading = true;
  isVisible = false;
  isChangeVisible = false;
  updateLevel = 0;
  selectId: number;
  parentId: number;
  params: any = {
    name: '',
    telephone: '',
  };
  getData() {
    this.http.get<RestResponse<Agency[]>>('/agency', this.params).subscribe(response => {
      this.list = response.result;
      this.convertList();
      this.loading = false;
    });
  }

  convertList() {
    this.list.forEach(item => {
      if (item.likeName && item.likeName.length > 11) {
        item.likeName = item.likeName.substring(0, 10) + '...';
      }
    });
  }

  updrade(agency: Agency) {
    this.updateLevel = agency.level;
    this.selectId = agency.id;
    this.showModal();
  }

  changeParent(agency: Agency) {
    this.selectId = agency.id;
    this.parentId = null;
    this.showChangeModal();
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.http.post<RestResponse<string>>('/agency/upgrade', null, {id: this.selectId, level: this.updateLevel})
      .subscribe(result => {
        if (result.code === 0) {
          this.reset();
          this.msg.info('升级成功');
        }
      });
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showChangeModal(): void {
    this.isChangeVisible = true;
  }

  changeHandleCancel(): void {
    this.isChangeVisible = false;
  }

  changeHandleOk(): void {
    this.http.post<RestResponse<string>>('/agency/change', null, {id: this.selectId, parentId: this.parentId})
      .subscribe(result => {
        if (result.code === 0) {
          this.reset();
          this.msg.info('变更成功');
        }
      });
    this.isChangeVisible = false;
  }
  reset() {
    this.params = {};
    this.getData();
  }
  constructor(private http: _HttpClient, public msg: NzMessageService) { }

  ngOnInit() {
    this.loading = true;
    this.getData();
  }

}
