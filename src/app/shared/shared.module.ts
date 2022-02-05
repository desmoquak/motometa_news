import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, NavigationComponent],
  imports: [CommonModule, AppRoutingModule, FlexLayoutModule, AppRoutingModule],
  exports: [FooterComponent, HeaderComponent, SidebarComponent, NavigationComponent],
})
export class SharedModule {}
