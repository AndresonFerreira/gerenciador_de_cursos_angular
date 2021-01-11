import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { error404Component } from "./component/error404/error404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponent,
    error404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component:  error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})

export class CoreModule {

}
