import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '',
        component: DisplayComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisplayRoutingModule {}
