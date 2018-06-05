import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialService } from '@delon/auth';
import { _HttpClient } from '@delon/theme';
import { RestResponse } from '../../dto';
import { Agency } from '../../model/agency';

@Component({
  selector: 'app-callback',
  template: ``,
  providers: [SocialService],
})
export class CallbackComponent implements OnInit {
  type: string;

  constructor(
    private socialService: SocialService,
    private route: ActivatedRoute,
    private router: Router,
    private http: _HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      switch (this.type) {
        case 'wechat_code':
          let code = this.route.snapshot.paramMap.get("code");
          this.http.get<RestResponse<Agency>>('/wechat/auth/login',{'code': code}).subscribe(
            res => {
              this.socialService.callback({
                token: res.result.token,
                name: 'cipchk',
                email: `${this.type}@${this.type}.com`,
                id: 10000,
                time: +new Date(),
              });
            }
          );
          break;
      }
    });
  }

  private mockModel() {
    this.socialService.callback({
      token: '123456789',
      name: 'cipchk',
      email: `${this.type}@${this.type}.com`,
      id: 10000,
      time: +new Date(),
    });
  }
}
