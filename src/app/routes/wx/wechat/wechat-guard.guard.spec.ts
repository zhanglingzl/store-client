import { TestBed, async, inject } from '@angular/core/testing';

import { WechatGuardGuard } from './wechat-guard.guard';

describe('WechatGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WechatGuardGuard]
    });
  });

  it('should ...', inject([WechatGuardGuard], (guard: WechatGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
