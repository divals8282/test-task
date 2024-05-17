import React from 'react';
import { Header } from './components/header';
import { Container } from './styles';
import { Post } from './components/post';

import PostOne from './assets/post1.png'
import PostTwo from './assets/post2.png'
import PostThree from './assets/post3.png'

const mockDescrPosts = "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"

const postList = [
  {
    description: mockDescrPosts,
    img: PostOne,
    tag: "Lifestyle",
    title: 'Eat Right For Your Exercise Regime'
  },
  {
    description: mockDescrPosts,
    img: PostTwo,
    tag: "Lifestyle",
    title: 'The Look: Perfect Balance'
  },
  {
    description: mockDescrPosts,
    img: PostThree,
    tag: "Style",
    title: 'Fun Things to Do in Rome'
  }
]


function App() {
  return (
    <Container>
      <Header />
      <div className='posts-list'>
        {[...postList,...postList, ...postList].map((post, index) =>
          <Post
            {...post}
            key={post.title+index}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
