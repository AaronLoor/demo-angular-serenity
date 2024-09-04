import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio-sesion',pathMatch:'full'},
  {path:'inicio-sesion',component:LoginComponent},
  {path:'inicio',component:DashboardComponent},
  {
    path: '**',
    redirectTo: 'inicio-sesion',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
