import { Post } from 'src/app/shared/models/post.model';

export interface PostState {
  post: Post[];
}

export const initialState = {
  post: [
    {
      id: 1,
      name: 'James',
      description: 'Inscurance agent of Nyc.',
    },
    {
      id: 2,
      name: 'Kevin',
      description: 'Event Manager.',
    },
  ],
};
