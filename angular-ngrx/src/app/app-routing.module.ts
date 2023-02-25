import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{
  path:'',
  component:CounterComponent
},{
  path:'posts',
  component:PostComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
