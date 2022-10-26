import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllPosts } from './postSlice';

const PostList = () => {

    const Posts = useSelector(selectAllPosts)

    return (
        <div>
            {Posts.map((post) => (
                <div key={post.id} className="card container-fluid w-50 my-5">
                    <h5 className="card-header">{post.title}</h5>
                    <div className="card-body">
                        <p className="card-text">{post.content.substr(0, 90)}...</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostList;
