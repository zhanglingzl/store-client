import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {SimpleTableButton, SimpleTableColumn, SimpleTableData, SimpleTableFilter} from "@delon/abc";
import {NzMessageService} from "ng-zorro-antd";
import {of} from "rxjs/observable/of";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    url = `https://randomuser.me/api/?results=3`;
    params = { a: 1, b: 2 };
    total = 100;
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value', type: 'radio' },
        { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        { title: '电话', index: 'phone' },
        { title: '注册时间', type: 'date', index: 'registered' }
    ];
    radioChange(ret: any) {
        console.log('radioChange', ret);
    }
    dataChange(data: SimpleTableData[]) {
        return data.map((i: SimpleTableData, index: number) => {
            i.disabled = index === 0;
            i.hidden = index === 1;
            return i;
        });
    }
}
