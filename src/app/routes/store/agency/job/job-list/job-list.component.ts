import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {RestResponse} from '../../../../../dto';
import {Agency} from '../../../../../model/agency';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
})
export class JobListComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;
  updateLevel = 0;
  selectId: number;

  params: any = {
    name: '',
    telephone: '',
  };
  data: Agency[] = [];
  expandDataCache = {};

  collapse(array: Agency[], data: Agency, $event: boolean): void {
    if ($event === false) {
      if (data.children && data.children.length > 0) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d.id);
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object): Agency[] {
    const stack = [];
    const array = [];
    const hashMap = {};
    stack.push({ ...root, level1: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children && node.children.length > 0) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[ i ], level1: node.level1 + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: Agency, hashMap: object, array: Agency[]): void {
    if (!hashMap[ node.id ]) {
      hashMap[ node.id ] = true;
      array.push(node);
    }
  }

  getData() {
    this.http.get<RestResponse<Agency[]>>('/agency', this.params).subscribe(response => {
      this.data = response.result;
      this.data.forEach(item => {
        this.expandDataCache[ item.id ] = this.convertTreeToList(item);
      });
    });
  }

  reset() {
    this.params = {};
    this.getData();
  }

  updrade(agency: Agency) {
    this.updateLevel = agency.level;
    this.selectId = agency.id;
    this.showModal();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.http.post<RestResponse<string>>('/agency/upgrade', null, {id: this.selectId, level: this.updateLevel})
             .subscribe(result => {
               if (result.code === 0) {
                 this.reset();
               }
             });
    this.isVisible = false;
    this.isOkLoading = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  constructor(private http: _HttpClient) {

  }
  ngOnInit(): void {
    this.getData();
  }
}
