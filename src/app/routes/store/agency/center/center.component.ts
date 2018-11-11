import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import {Router, ActivationEnd, ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';
import { zip, Subscription } from 'rxjs';
import {Agency} from '../../../../model/agency';
import {RestResponse} from '../../../../dto';
import {TradingVolume} from '../../../../model/tradingVolume';

@Component({
  selector: 'app-account-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyCenterComponent implements OnInit, OnDestroy {
  private router$: Subscription;
  agency: Agency;
  tradingVolumeList: TradingVolume[];
  id: number;
  notice: any;
  tabs: any[] = [
    {
      key: 'articles',
      tab: '下级代理',
    },
/*    {
      key: 'applications',
      tab: '应用 (8)',
    },
    {
      key: 'projects',
      tab: '项目 (8)',
    },*/
  ];

  pos = 0;

  constructor(
    private router: Router,
    private http: _HttpClient,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.queryParams.subscribe(queryParams => {
      this.id = queryParams.id;
    });
  }

  private setActive() {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) this.pos = idx;
  }

  ngOnInit(): void {
    zip(this.http.get<RestResponse<Agency>>('/agency/' + this.id),
      this.http.get<RestResponse<TradingVolume[]>>('/statistics/' + this.id))
      .subscribe(
      ([data, tradingVolume]) => {
        this.agency = data.result;
        this.tradingVolumeList = tradingVolume.result;
        console.log(this.tradingVolumeList);
        this.cd.detectChanges();
      },
    );
    this.cd.detectChanges();
    this.router$ = this.router.events
      .pipe(filter(e => e instanceof ActivationEnd))
      .subscribe(() => this.setActive());
    this.setActive();
  }

  to(item: any) {
    this.router.navigateByUrl(`/agency/card/center/${item.key}`, {
      queryParams: {
        id: this.agency.id
      }
    });
  }

  taging = false;
  tagValue = '';
  @ViewChild('tagInput')
  private tagInput: ElementRef;
  tagShowIpt() {
    this.taging = true;
    this.cd.detectChanges();
    (this.tagInput.nativeElement as HTMLInputElement).focus();
  }

  tagBlur() {
/*    const { user, cd, tagValue } = this;
    if (
      tagValue &&
      user.tags.filter(tag => tag.label === tagValue).length === 0
    ) {
      user.tags.push({ label: tagValue });
    }
    this.tagValue = '';
    this.taging = false;
    cd.detectChanges();*/
  }

  tagEnter(e: KeyboardEvent) {
    if (e.keyCode === 13) this.tagBlur();
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }
}
