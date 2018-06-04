import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root'
})
export class WechatGuardGuard implements CanActivate {
  constructor(private cache: CacheService,
              private router: Router,
              private http: _HttpClient) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let url: string = state.url;
    if (!this.cache.get("agency")) {
      return true;
    }
    this.cache.set("redirectUrl", url);
    this.router.navigate(['/wechat/auth_code']);
    return false;

  }

}
