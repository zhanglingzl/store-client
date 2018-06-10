import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {RestResponse} from '../../../../../dto';
import {Agency} from '../../../../../model/agency';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
})
export class JobListComponent implements OnInit {

  params: any = {
    name: '',
    telephone: '',
  };
  expandForm: true;
  data: Agency[] = [];
  expandDataCache = {};

  collapse(array: Agency[], data: Agency, $event: boolean): void {
    if ($event === false) {
      console.log(data.children.length)
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

  getData(){
    this.http.get<RestResponse<Agency[]>>('/agency',this.params).subscribe(response => {
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

  constructor(private http: _HttpClient){

  }
  ngOnInit(): void {
    this.getData();
  }
}
