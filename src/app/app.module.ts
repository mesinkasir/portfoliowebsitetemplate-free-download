import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SourcecodeComponent } from './sourcecode/sourcecode.component';
import { PhotographyComponent } from './photography/photography.component';
import { DigitalartComponent } from './digitalart/digitalart.component';
import { CinematicComponent } from './cinematic/cinematic.component';
import { DubstepComponent } from './dubstep/dubstep.component';
import { HiremeComponent } from './hireme/hireme.component';
import { BuycoffeeComponent } from './buycoffee/buycoffee.component';
import { CasualComponent } from './photography/casual/casual.component';
import { StreetComponent } from './photography/street/street.component';
import { BeautyComponent } from './photography/beauty/beauty.component';
import { ConceptualComponent } from './photography/conceptual/conceptual.component';
import { TemplateComponent } from './sourcecode/template/template.component';
import { ApplicationComponent } from './sourcecode/application/application.component';
import { CmsComponent } from './sourcecode/cms/cms.component';
import { DuaComponent } from './photography/street/dua/dua.component';
import { RetouchComponent } from './photography/beauty/retouch/retouch.component';
import { NextComponent } from './photography/casual/next/next.component';
import { DarkbeautyComponent } from './photography/conceptual/darkbeauty/darkbeauty.component';
import { FairyComponent } from './photography/conceptual/fairy/fairy.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SourcecodeComponent,
    PhotographyComponent,
    DigitalartComponent,
    CinematicComponent,
    DubstepComponent,
    HiremeComponent,
    BuycoffeeComponent,
    CasualComponent,
    StreetComponent,
    BeautyComponent,
    ConceptualComponent,
    TemplateComponent,
    ApplicationComponent,
    CmsComponent,
    DuaComponent,
    RetouchComponent,
    NextComponent,
    DarkbeautyComponent,
    FairyComponent
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
