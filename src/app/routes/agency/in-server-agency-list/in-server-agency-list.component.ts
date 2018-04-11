import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-in-server-agency-list',
  templateUrl: './in-server-agency-list.component.html',
})
export class InServerAgencyListComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
