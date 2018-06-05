import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService, JWTTokenModel } from '@delon/auth';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root'
})
export class WechatGuardGuard implements CanActivate {
  constructor(private cache: CacheService,
              private router: Router,
              @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // let useragent = navigator.userAgent;
    // if (!useragent.match(/MicroMessenger/i)) {
    //   this.router.navigate(['/wechat/auth/info']);
    // }
    let url: string = state.url;
    const tokenData = this.tokenService.get<JWTTokenModel >(JWTTokenModel);
    console.log(tokenData);
    if (!tokenData.token || tokenData.isExpired()) {
      this.cache.set("redirectUri", url);
      this.router.navigate(['/wechat/auth_code']);
      return false;

    }
    return true;

  }

}
