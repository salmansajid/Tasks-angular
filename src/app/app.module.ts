import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { DisplayService } from './layout/display/display.service';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        LayoutModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, DisplayService],
    bootstrap: [AppComponent]
})
export class AppModule {}
