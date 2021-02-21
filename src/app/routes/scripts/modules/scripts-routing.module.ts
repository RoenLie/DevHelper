import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptsListComponent } from "../pages/scripts-list/scripts-list.component";
import { ScriptsPortalComponent } from "../pages/scripts-portal/scripts-portal.component";
import { ScriptsNewComponent } from "../pages/scripts-new/scripts-new.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "portal" },
  { path: "portal", component: ScriptsPortalComponent },
  { path: "list", component: ScriptsListComponent },
  { path: "new", component: ScriptsNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptsRoutingModule { }
