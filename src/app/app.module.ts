import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/Http';
import {HttpClientModule} from '@angular/common/http';
import {appRoutes} from './routeconfigs'


import { AppComponent } from './app.component';
import {configservice} from './config.service';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {observableservice} from './observable.service';
import {ShortenPipe} from './shorten.pipe';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './parentcomponent/childcomponent/childcomponent.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { PopupmodalComponent } from './popupmodal/popupmodal.component';
import { RoutenotfoundComponent } from './routenotfound/routenotfound.component';
import { ReadfromfileComponent } from './readfromfile/readfromfile.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { RoutingcomponentComponent } from './routingcomponent/routingcomponent.component';
import { RoutingparametercomponentComponent } from './routingparametercomponent/routingparametercomponent.component';
import { SimpleobservableComponent } from './simpleobservable/simpleobservable.component';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import { CommoncomponentComponent } from './commoncomponent/commoncomponent.component';


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
    RoutenotfoundComponent,
    ReadfromfileComponent,
    FileuploadComponent,
    RoutingcomponentComponent,
    RoutingparametercomponentComponent,
    SimpleobservableComponent,
    ObservablemethodsComponent,
    CommoncomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [configservice,{provide:APP_INITIALIZER,useFactory:init_app,deps:[configservice],multi:true},AuthService,AuthGuard,observableservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
