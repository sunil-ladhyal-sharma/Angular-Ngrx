import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME_CONSTANTS } from '../shared/constants/constants';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post.component';
import { postReducer } from './state/post.reducer';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
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
  declarations: [PostComponent, AddPostComponent, UpdatePostComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(
      FEATURE_NAME_CONSTANTS.POST_FEATURE_NAME,
      postReducer
    ),
  ],
})
export class PostModule {}
