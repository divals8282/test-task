import { useEffect, useState } from 'react';
import { Header } from './components/header';
import { Container } from './styles';
import { Post } from './components/post';
import { Modal } from './components/modal';

type PostType = {
  text: string;
  img: string;
  tags: string;
  title: string;
}

function searchFilter(search: string, posts: PostType[]) {
  if(search) {
    return posts.filter(post => {
      if(post.title.indexOf(search) !== -1) {
        return true;
      }
      return false;   
    })
  }
  
  return posts
}

function App() {
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [postList, setPostList] = useState<PostType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://cloud.codesupply.co/endpoint/react/data.json').then(res => res.json()).then(data => {
      setPostList(data);
    })
  }, [])
  
  return (
    <Container>
        <Header onSearch={(value) => setSearch(value)} />
        <div className='posts-list'>
          {searchFilter(search,postList).map((post, index) =>
            <Post
              {...post}
              key={post.title + index}
              showContent={false}
              onClick={() => {
                setSelectedPost(post);
                setModalOpen(true);
              }}
            />
          )}
        </div>

      <Modal
        content={selectedPost ? <Post {...selectedPost} showContent onClick={() => { }} /> : <></>}
        onRequestToClose={() => setModalOpen(false)}
        open={modalOpen}
      />
    </Container>
  );
}

export default App;
