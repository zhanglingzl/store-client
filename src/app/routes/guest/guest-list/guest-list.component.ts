import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {SimpleTableColumn, SimpleTableComponent, SimpleTableData} from '@delon/abc';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
})
export class GuestListComponent implements OnInit {

    q: any = {
        name: '',
        weChatNo: '',
        telephone: '',
        cardNo: '',
    };
    data: any[] = [];
    loading = false;
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
        { title: '', index: 'key', type: 'checkbox' },
        { title: '姓名', index: 'name' },
        { title: '性别', index: 'gender', format: (item: any) =>{
            if(item.gender == '1'){
                return '男';
            }else{
                return '女';
            }
          }
        },
        { title: '手机号', index: 'telephone'},
        { title: '微信号', index: 'weChatNo'},
        { title: '身份证号', index: 'cardNo'},
        { title: '地址', index: 'addressId'},
        { title: '邮箱', index: 'email'},
        {
            title: '注册日期', index: 'createDate', type: 'date',
            sorter: (a: any, b: any) => a.createDate - b.createDate
        }
    ];
    selectedRows: SimpleTableData[] = [];
    totalCallNo = 0;
    expandForm = false;

    constructor(private http: _HttpClient, public msg: NzMessageService, private modalSrv: NzModalService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loading = true;
        this.http.get('/guest/findAll', this.q).pipe(
            map((list: any[]) => list),
            tap(() => this.loading = false)
        ).subscribe(res => {
            this.data = res
        });
    }

    checkboxChange(list: SimpleTableData[]) {
        this.selectedRows = list;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
    }

    remove() {
        this.http.delete('/rule', { nos: this.selectedRows.map(i => i.no).join(',') }).subscribe(() => {
            this.getData();
            this.st.clearCheck();
        });
    }

}
