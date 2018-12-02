import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {appRoutes} from './routeconfigs'


import { AppComponent } from './app.component';
import {configservice} from './config.service';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {ShortenPipe} from './shorten.pipe';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './parentcomponent/childcomponent/childcomponent.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { PopupmodalComponent } from './popupmodal/popupmodal.component';
import { RoutenotfoundComponent } from './routenotfound/routenotfound.component';


export function init_app(configservice:configservice){
   return ()=> configservice.initializeURL();
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainComponent,
    ShortenPipe,
    ParentcomponentComponent,
    ChildcomponentComponent,
    FormcomponentComponent,
    PopupmodalComponent,
    RoutenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [configservice,{provide:APP_INITIALIZER,useFactory:init_app,deps:[configservice],multi:true},AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
