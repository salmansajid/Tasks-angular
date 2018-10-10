import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DisplayService } from './display.service';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
    heading: string;
    customer: any;
    isDetails: boolean;
    isInfo: boolean;
    model: any = {};

    constructor(private route: ActivatedRoute, private service: DisplayService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.heading = params['heading'];
            if (this.heading === 'Customer Detail') {
                this.getData();
                this.isInfo = false;
                this.isDetails = true;
            }
            if (this.heading === 'Customer Information') {
                this.isDetails = false;
                this.isInfo = true;
            }
        });
    }
    public getData() {
        this.service.get().subscribe(res => {
            this.customer = res['customers'];
        });
    }

    public onSubmit() {
        console.log(this.model);
        console.log('form submitted');
        this.model = {};
    }
}
