import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './parentcomponent/childcomponent/childcomponent.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { PopupmodalComponent } from './popupmodal/popupmodal.component';
import { RoutenotfoundComponent } from './routenotfound/routenotfound.component';
import {AuthGuard} from './auth-guard.service';

export const appRoutes:Routes=[

{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent,
canActivate:[AuthGuard],
canActivateChild:[AuthGuard],
children:[
  {path:'main',component:MainComponent}
]
},
{path:'parent',component:ParentcomponentComponent,children:[
  {path:'child',component:ChildcomponentComponent}
]
},
{path:'form',component:FormcomponentComponent},
{path:'popup',component:PopupmodalComponent},
{path:'**',component:RoutenotfoundComponent}

];