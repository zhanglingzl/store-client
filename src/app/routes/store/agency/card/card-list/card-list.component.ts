import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {RestResponse} from '../../../../../dto';
import {Agency} from '../../../../../model/agency';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

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
    id: '',
  };

  /**
   * 获取代理信息
   */
  getData() {
    this.http.get<RestResponse<Agency[]>>('/agency', this.params).subscribe(response => {
      this.list = response.result;
      this.convertList();
      this.loading = false;
    });
  }

  /**
   * 将过长微信名隐藏
   */
  convertList() {
    this.list.forEach(item => {
      if (item.likeName && item.likeName.length > 11) {
        item.likeName = item.likeName.substring(0, 10) + '...';
      }
    });
  }

  /**
   * 代理升级
   * @param {Agency} agency
   */
  updrade(agency: Agency) {
    this.updateLevel = agency.level;
    this.selectId = agency.id;
    this.showModal();
  }

  /**
   * 父级变更
   * @param {Agency} agency
   */
  changeParent(agency: Agency) {
    this.selectId = agency.id;
    this.parentId = null;
    this.showChangeModal();
  }

  /**
   * 查看详情
   * @param {Agency} agency
   */
  view(agency: Agency) {
    this.router.navigate(['/agency/card/center'], {
      queryParams: {
        id: agency.id
      }
    });
  }

  /**
   * 打开代理升级模态框
   */
  showModal(): void {
    this.isVisible = true;
  }

  /**
   * 确认升级
   */
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

  /**
   * 关闭代理升级模态框
   */
  handleCancel(): void {
    this.isVisible = false;
  }

  /**
   * 打开父级变更模态框
   */
  showChangeModal(): void {
    this.isChangeVisible = true;
  }

  /**
   * 关闭父级变更模态框
   */
  changeHandleCancel(): void {
    this.isChangeVisible = false;
  }

  /**
   * 确认父级变更
   */
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

  /**
   * 重置
   */
  reset() {
    this.params = {};
    this.getData();
  }
  constructor(private http: _HttpClient, public msg: NzMessageService,
              private router: Router) { }

  ngOnInit() {
    this.getData();
  }

}
