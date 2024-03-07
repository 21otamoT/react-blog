import React, { useEffect, useState } from 'react'
import './Home.css'
import { auth, db } from '../firebace';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      // console.log(data);
      console.log(data.docs.map(doc => ({...doc.data(), id: doc.id })));
      setPostList(data.docs.map(doc => ({...doc.data(), id: doc.id })));
    };
    getPosts();
  },[]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.href='/'
  };

  return (
    <div className='container'>
      {postList.map(post => {
        return (
          <div key={post.id} className='post-contents'>
            <div className='post-header'>
              <h1>{post.title}</h1>
            </div>
            <div className='post-text-container'>
            {post.postText}
            </div>
            <div className='name-and-delete-button'>
              <h3>yuckey</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Home