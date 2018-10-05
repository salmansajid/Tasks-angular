import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
    heading: Observable<string>;
    constructor(private route: ActivatedRoute) {
        console.log('Loaded ....................');
    }

    ngOnInit() {
        console.log('this.route.params', this.route.params);

        this.route.params.subscribe(params => {
            this.heading = params['heading'];
            console.log('params', params);
        });

        // this.heading = this.route.params.pipe(
        //     map(params => {
        //         console.log('params', params);
        //         console.log('params.get(heading)', params.get('heading'));
        //         return params.get('heading') || '';
        //     })
        // );
    }
}
