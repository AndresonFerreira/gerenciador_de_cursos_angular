import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../star/star.component";
import { CourseinfoComponent } from "./course-info.component";
import { CourselistComponent } from "./course-list.component";

@NgModule({
  declarations: [
    CourselistComponent,
    CourseinfoComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourselistComponent
      },
      {
        path: 'courses/info/:id', component: CourseinfoComponent
      }
    ])

  ]
})
export class CourseModule {

}
