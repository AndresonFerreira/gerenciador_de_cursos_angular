import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { starModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseinfoComponent } from "./course-info.component";
import { CourselistComponent } from "./course-list.component";

@NgModule({
  declarations: [
    CourselistComponent,
    CourseinfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    starModule,
    AppPipeModule,
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
