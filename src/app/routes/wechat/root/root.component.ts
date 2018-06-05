import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { InfiniteLoaderComponent } from 'ngx-weui';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styles: []
})
export class RootComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() {
  }

  onLoadMore(comp: InfiniteLoaderComponent) {}

}
