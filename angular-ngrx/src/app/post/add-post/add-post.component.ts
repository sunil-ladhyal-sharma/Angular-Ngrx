import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ERRORS } from 'src/app/shared/constants/constants';
import { Post } from 'src/app/shared/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { ADD_POST_ACTION } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  addPost:FormGroup;
  errorConstants : any;

  constructor(private fb : FormBuilder, private store : Store<AppState>) {
    this.addPost = this.fb.group({
      name: new FormControl(null,[Validators.required]),
      description : new FormControl(null,[Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    });

    this.errorConstants = ERRORS
  }

  submitPost() {
    console.log(this.addPost.value)
    if(this.addPost.invalid) {
      return
    }

    const post:Post = {
      id:0,
      name : this.addPost.value.name,
      description: this.addPost.value.description
    }

    this.store.dispatch(ADD_POST_ACTION({post}))

  }

}
