import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { UPDATE_POST_ACTION } from '../state/post.actions';
import { getPost, getPostById } from '../state/post.selector';
import { PostState } from '../state/post.state';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss'],
})
export class UpdatePostComponent implements OnInit {
  addPost!: FormGroup;
  getPost?: Post;
  id:any

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params?.get('id');
      this.store.select(getPost).subscribe((post) => {
        this.getPost = post.find((itm) => itm.id.toString() == this.id);
        this.addPost = this.fb.group({
          name: new FormControl(this.getPost?.name, [Validators.required]),
          description: new FormControl(this.getPost?.description, [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(100),
          ]),
        });
      });
    });
  }

  upatedPost() {

    if(this.addPost.invalid) {
      return
    }

    const post:Post = {
      id :  parseInt(this.id),
      name: this.addPost.value.name,
      description : this.addPost.value.description  
    }
    console.log(this.addPost.value);
    this.store.dispatch(UPDATE_POST_ACTION({post}))
  }
}
