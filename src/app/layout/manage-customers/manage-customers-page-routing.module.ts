import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCurstomerPageComponent } from './manage-customers-page.component';
import { DisplayComponent } from '../display/display.component';

const routes: Routes = [
    {
        path: '',
        component: ManageCurstomerPageComponent
    },
    {
        path: 'display/:heading',
        component: DisplayComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [DisplayComponent],
    exports: [RouterModule]
})
export class ManageCustomerPageRoutingModule {}
