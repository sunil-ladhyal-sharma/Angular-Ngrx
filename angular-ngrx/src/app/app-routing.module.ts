import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { PostComponent } from './post/post.component';
import { UpdatePostComponent } from './post/update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'posts',
    component: PostComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent,
      },
      {
        path: 'edit/:id',
        component: UpdatePostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
