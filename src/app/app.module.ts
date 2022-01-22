import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutFullModule } from './layouts/layout-full/layout-full.module';
import { LayoutSideModule } from './layouts/layout-side/layout-side.module';
import { RowComponent } from './pages/row/row.component';
import { ColumnComponent } from './pages/column/column.component';


@NgModule({
  declarations: [AppComponent, RowComponent, ColumnComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutSideModule,
    LayoutFullModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
