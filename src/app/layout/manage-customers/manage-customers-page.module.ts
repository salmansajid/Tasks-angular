import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCurstomerPageComponent } from './manage-customers-page.component';
import { ManageCustomerPageRoutingModule } from './manage-customers-page-routing.module';

@NgModule({
    imports: [CommonModule, ManageCustomerPageRoutingModule],
    declarations: [ManageCurstomerPageComponent]
})
export class ManageCustomerPageModule {}
