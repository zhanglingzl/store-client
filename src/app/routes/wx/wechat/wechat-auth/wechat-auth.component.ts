import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-wechat-auth',
  templateUrl: './wechat-auth.component.html',
  styles: []
})
export class WechatAuthComponent implements OnInit {

  constructor(private http: _HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get(`/wechat/auth/${id}`).subscribe(
      res => console.log(res)
    );
  }

}
