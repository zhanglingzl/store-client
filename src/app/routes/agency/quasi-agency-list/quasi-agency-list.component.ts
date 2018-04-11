import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-quasi-agency-list',
  templateUrl: './quasi-agency-list.component.html',
})
export class QuasiAgencyListComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
