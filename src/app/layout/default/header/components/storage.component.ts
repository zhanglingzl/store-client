import {Component, HostListener} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Router} from "@angular/router";

@Component({
    selector: 'header-storage',
    template: `
    <i class="anticon anticon-tool"></i>
    清除本地缓存
    `,
    host: {
        '[class.d-block]': 'true'
    }
})
export class HeaderStorageComponent {

    constructor(
        private confirmServ: NzModalService,
        private messageServ: NzMessageService,
        private router: Router
    ) {
    }

    @HostListener('click')
    _click() {
        this.confirmServ.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: () => {
                localStorage.clear();
                this.router.navigate(['/passport/login']);

            }
        });
    }
}
