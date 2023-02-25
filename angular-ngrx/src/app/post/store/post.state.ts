import { Post } from 'src/app/models/post.model';

export interface PostState {
  post: Post[];
}

export const initialState = {
  post: [
    {
      id: 1,
      name: 'name 1',
      description: 'description',
    },
    {
      id: 2,
      name: 'name 2',
      description: 'description',
    },
  ],
};
