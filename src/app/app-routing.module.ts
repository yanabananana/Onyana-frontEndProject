import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UsersdetailsComponent } from './component/usersdetails/usersdetails.component';

const routes: Routes = [
  {path:'users', component:UsersComponent},
  {path:'user/uuid', component: UsersdetailsComponent},
  {path:'**', redirectTo: 'user'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

