import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourselistComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void{
    this.courses = [
      {
        id: 1,
        name: "Angular básico",
        imgUrl: '',
        price: 99.89,
        code: "ZYX-1234",
        duration: 120,
        rating: 5.4,
        releaseDate: 'Decenber, 3, 2020'
      },
      {
        id: 2,
        name: "Angular Form",
        imgUrl: '',
        price: 120.89,
        code: "ABC-15678",
        duration: 80,
        rating: 4,
        releaseDate: 'Decenber, 6, 2020'
      }
    ]
  }

}
