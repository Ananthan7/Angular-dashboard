import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ProductsComponent } from './components/products/products.component';
// import { StatisticsComponent } from './components/statistics/statistics.component';
// import { CoupensComponent } from './components/coupens/coupens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { AdminLayoutModule } from './pages/admin-layout/admin-layout.module';
@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // ProductsComponent,
    // StatisticsComponent,
    // CoupensComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    AdminLayoutModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class AppModule { }
