import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/portfolio/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/portfolio/about-me/about-me.component';
import { MySkillsComponent } from './components/portfolio/my-skills/my-skills.component';
import { MyProjectsComponent } from './components/portfolio/my-projects/my-projects.component';
import { ContactComponent } from './components/portfolio/contact/contact.component';
import { InViewDirective } from './directives/in-view.directive';
import { FooterComponent } from './components/footer/footer.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ContactComponent,
    InViewDirective,
    FooterComponent,
    ImprintComponent,
    DataProtectionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
