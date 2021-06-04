import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SourcecodeComponent } from './sourcecode/sourcecode.component';
import { PhotographyComponent } from './photography/photography.component';
import { CinematicComponent } from './cinematic/cinematic.component';
import { DigitalartComponent } from './digitalart/digitalart.component';
import { DubstepComponent } from './dubstep/dubstep.component';
import { HiremeComponent } from './hireme/hireme.component';
import { BuycoffeeComponent } from './buycoffee/buycoffee.component';
import { CasualComponent } from './photography/casual/casual.component';
import { NextComponent } from './photography/casual/next/next.component';
import { StreetComponent } from './photography/street/street.component';
import { DuaComponent } from './photography/street/dua/dua.component';
import { ConceptualComponent } from './photography/conceptual/conceptual.component';
import { DarkbeautyComponent } from './photography/conceptual/darkbeauty/darkbeauty.component';
import { FairyComponent } from './photography/conceptual/fairy/fairy.component';
import { BeautyComponent } from './photography/beauty/beauty.component';
import { RetouchComponent } from './photography/beauty/retouch/retouch.component';
import { ApplicationComponent } from './sourcecode/application/application.component';
import { TemplateComponent } from './sourcecode/template/template.component';
import { CmsComponent } from './sourcecode/cms/cms.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sourcecode', component: SourcecodeComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'digitalart', component: DigitalartComponent },
  { path: 'cinematic', component: CinematicComponent },
  { path: 'dubstep', component: DubstepComponent },
  { path: 'hireme', component: HiremeComponent },
  { path: 'buycoffee', component: BuycoffeeComponent },
  { path: 'photography/casual', component: CasualComponent },
  { path: 'photography/casual/next', component: NextComponent },
  { path: 'photography/street', component: StreetComponent },
  { path: 'photography/street/dua', component: DuaComponent },
  { path: 'photography/conceptual', component: ConceptualComponent },
  { path: 'photography/conceptual/darkbeauty', component: DarkbeautyComponent },
  { path: 'photography/conceptual/fairy', component: FairyComponent },
  { path: 'photography/beauty', component: BeautyComponent },
  { path: 'photography/beauty/retouch', component: RetouchComponent },
  { path: 'sourcecode/cms', component: CmsComponent },
  { path: 'sourcecode/application', component: ApplicationComponent },
  { path: 'sourcecode/template', component: TemplateComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
