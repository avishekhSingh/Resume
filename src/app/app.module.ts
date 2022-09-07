import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ObjectiveComponent } from './objective/objective.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { CurrentInfoComponent } from './current-info/current-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    EducationComponent,
    SkillsComponent,
    ObjectiveComponent,
    ProjectsComponent,
    HobbiesComponent,
    CurrentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
