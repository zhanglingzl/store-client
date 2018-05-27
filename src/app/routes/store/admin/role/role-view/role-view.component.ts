import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';

  @Component({
    selector: 'app-role-view',
    templateUrl: './role-view.component.html'
  })
  export class RoleViewComponent implements OnInit {

    id = this.route.snapshot.params.id;
    i: any;

    constructor(
      private route: ActivatedRoute,
      public msgSrv: NzMessageService,
      public http: _HttpClient
    ) { }

    ngOnInit(): void {
      this.http.get(`/role/${this.id}`).subscribe(res => this.i = res);
    }
  }
