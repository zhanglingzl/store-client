import { Component, OnInit } from '@angular/core';
import { SocialService } from '@delon/auth';
import { environment } from '@env/environment';

@Component({
  selector: 'app-auth-code',
  templateUrl: './auth-code.component.html',
  providers: [SocialService]
})
export class AuthCodeComponent implements OnInit {

  constructor(private socialService: SocialService) {
    let callback = `http://store.vicp.la/callback/wechat_code`;
    let url =`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfd8a4a8b67963cf9&redirect_uri=${decodeURIComponent(
      callback,
    )}&response_type=code&scope=snsapi_userinfo#wechat_redirect`;
    this.socialService.login(url, '/', {
      type: 'window',
    });
  }

  ngOnInit() {


    let url = `${environment.SERVER_URL}/wechat/auth/code?redirect_uri=$`;
    console.log(url);

  }

}
