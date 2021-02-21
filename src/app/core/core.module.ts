import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from "./components/nav-top/nav-top.component";
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component'

@NgModule({
  declarations: [NavTopComponent, NavItemComponent, NavMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [NavTopComponent, NavItemComponent]
})
export class CoreModule { }
