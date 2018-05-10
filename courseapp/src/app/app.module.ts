//Module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


//Component Imports
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './banner/banner.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OffersComponent } from './routes/offers/offers.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';
import { OffercodePipe } from './pipes/offercode.pipe';
import { FilterpricePipe } from './pipes/filterprice.pipe';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';
import { ReviewComponent } from './routes/reviews/review/review.component';

//Service Imports
import { CourseService } from './services/course.service';
import { ReviewService } from './services/review.service';
import { EnquiryService } from './services/enquiry.service';
import { CoursedetailsComponent } from './routes/home/coursedetails/coursedetails.component';
import { ScheduleComponent } from './schedule/schedule.component';

//For Change Language
export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

//For Routing
const routes=[
  {path:"",component:HomeComponent},
  {path:"offices",component:OfficesComponent},
  {path:"newcourses",component:NewcoursesComponent},
  {path:"offers",component:OffersComponent},
  {path:"vclass",component:VirtualclassComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"cdetails/:ccode",component:CoursedetailsComponent},
  {path:"schedules",component:ScheduleComponent,outlet:"sidebar"}
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryformComponent,
    HomeComponent,
    OfficesComponent,
    NewcoursesComponent,
    VirtualclassComponent,
    ReviewsComponent,
    OffersComponent,
    CourselistComponent,
    CourseComponent,
    OffercodePipe,
    FilterpricePipe,
    ReviewlistComponent,
    ReviewComponent,
    CoursedetailsComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]
      }
    })
  ],
  providers: [
    CourseService,
    ReviewService,
    EnquiryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
