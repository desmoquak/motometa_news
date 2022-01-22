import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutSideComponent } from './layout-side.component';
import { ColumnComponent } from 'src/app/pages/column/column.component';
import { RowComponent } from 'src/app/pages/row/row.component';

@NgModule({
  declarations: [
    LayoutSideComponent, ColumnComponent, RowComponent
  ],
  imports: [CommonModule, SharedModule],
})

export class LayoutSideModule {}
