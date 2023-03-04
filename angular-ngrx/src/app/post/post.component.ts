import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post.model';
import { AppState } from '../state/app.state';
import { getPost } from './state/post.selector';
import { TOOLTIPS as Tooltips } from '../shared/constants/constants';
import { DELETE_POST_ACTION } from './state/post.actions';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  posts: Observable<Post[]>
  toolTips?:any;
  
  constructor(private store: Store<AppState>) {
    console.log(this.toolTips)
    this.posts = this.store.select(getPost)
    this.toolTips = Tooltips;
  }

  deletePost(id:number) {
    this.store.dispatch(DELETE_POST_ACTION({id}))

  }
}
