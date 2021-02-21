import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptsRoutingModule } from './scripts-routing.module';
import { RouterModule } from "@angular/router";
import { ScriptsListComponent } from "../pages/scripts-list/scripts-list.component";
import { ScriptsNewComponent } from "../pages/scripts-new/scripts-new.component";
import { ScriptsPortalComponent } from "../pages/scripts-portal/scripts-portal.component";



@NgModule({
  declarations: [
    ScriptsListComponent,
    ScriptsNewComponent,
    ScriptsPortalComponent
  ],
  imports: [
    CommonModule,
    ScriptsRoutingModule,
    RouterModule
  ]
})
export class ScriptsModule { }
