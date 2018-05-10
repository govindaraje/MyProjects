import { Injectable } from '@angular/core';
import{ course } from '../course';

@Injectable()
export class CourseService {
  courses:course[];
  constructor() { 
    this.courses=[
      {
          image:"Angular.jpg",
          name:"Angular 4",
          price:21000,
          description:"A component based application framework.Join the most comprehensive and popular Angular course on Udemy!This course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing etc.,"
      },
      {
        image:"Azure.png",
        name:"MS Azure",
        price:30000,
        description:"Microsoft Azure Training & Certification - Koenig Solutions provides Microsoft Azure official training courses with 24X7 Hands-on Labs access"
      },
      {
        image:"Cloud.jpg",
        name:"Cloud Courses",
        price:40000,
        description:"The Cloud Computing Course offered at IIHT, has been structured to cover Cloud Computing in virtual environments and also on various other platforms. "
      },
      {
        image:"Dot Net.jpg",
        name:"Dot Net",
        price:80000,
        description:"Modules covered: ASP.NET, VB.Net, C#, ADO.net, WCF, WPF, MVC and ETC... ..."
      },
      {
        image:"Photoshop.jpg",
        name:"Photoshop",
        price:10000,
        description:"Learn Photoshop online from 43 Photoshop courses from top institutions like California Institute of the Arts and Michigan State University."
      },
    ]
  }
  getCourses():course[]{
    return this.courses;
  }
}
