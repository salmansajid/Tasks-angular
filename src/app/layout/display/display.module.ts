import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { DisplayRoutingModule } from './display-routing.module';

@NgModule({
    imports: [CommonModule, DisplayRoutingModule ],
    declarations: [DisplayComponent]
})
export class DisplayModule {}
