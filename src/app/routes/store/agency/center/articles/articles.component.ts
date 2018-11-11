import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef, OnInit,
} from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {ActivatedRoute} from '@angular/router';
import {Agency} from '../../../../../model/agency';
import {RestResponse} from '../../../../../dto';

@Component({
  selector: 'app-account-center-articles',
  templateUrl: './articles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./articles.component.less']
})
export class AgencyCenterArticlesComponent implements OnInit {
  list: any[];
  id: number;
  constructor(private http: _HttpClient, private cd: ChangeDetectorRef, private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(queryParams => {
      this.id = queryParams.id;
    });
  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get<RestResponse<Agency[]>>('/agency/parentId', {parentId: this.id}).subscribe((data: any) => {
      this.list = data.result;
      console.log(data.result);
      this.cd.detectChanges();
    });
  }
}
