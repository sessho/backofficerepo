import { Component, OnInit } from 'node_modules/@angular/core';
import { Http } from 'node_modules/@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }
    title: string = "All I did was check-in and bada-bing";
    apiValues: string[] = [];
    ngOnInit() {
        this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
        });
    }
}
