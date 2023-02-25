import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { AppState } from '../state/app.state';
import { getPost } from './state/post.selector';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  posts: Observable<Post[]>
  constructor(private store: Store<AppState>) {
    this.posts = this.store.select(getPost)
  }

}
