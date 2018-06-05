import { Component, OnInit } from '@angular/core';
import { SocialService } from '@delon/auth';
import { CacheService } from '@delon/cache';

@Component({
  selector: 'app-auth-code',
  templateUrl: './auth-code.component.html',
  providers: [SocialService]
})
export class AuthCodeComponent implements OnInit {

  constructor(private socialService: SocialService,
              private cache: CacheService) {}

  ngOnInit() {

    let callback = `http://localhost:4200/callback/wechat_code`;
    // let url =`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfd8a4a8b67963cf9&redirect_uri=${decodeURIComponent(
    //   callback,
    // )}&response_type=code&scope=snsapi_userinfo#wechat_redirect`;
    let url =  `http://localhost:8080/wechat/auth/code?redirect_uri=${decodeURIComponent(
      callback,
    )}`;
    this.socialService.login(url, this.cache.getNone("redirectUri"), {
      type: 'href',
    });

  }

}
