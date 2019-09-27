import { DeleteComponent } from './delete/delete.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ShowAllComponent } from './show-all/show-all.component';


const routes: Routes = [
  {path:'add-student',component:AddStudentComponent},
  {path:'delete',component:DeleteComponent},
  {path:'search',component:SearchComponent},
  {path:'show-all',component:ShowAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
