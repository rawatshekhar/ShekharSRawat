import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import {MatCardModule} from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes =[
{ path:'', component: HomeComponent },
{ path:'about', component: AboutComponent },
{ path:'contact', component: ContactComponent},
{ path:'skills', component: SkillsComponent},
{ path:'work', component: WorksComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    WorksComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
