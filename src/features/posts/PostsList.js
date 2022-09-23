import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
import { selectAllPosts } from './postsSlice';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id} style={{ border: '1px solid black', margin: '5px' }}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section>
            <div>PostsList</div>
            {renderedPosts}
        </section>
    )
}

export default PostsList