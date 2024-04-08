import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostContext } from "../../utils/context/postContext.jsx";

const PostDetails = () => {
    const { id } = useParams();
    const { state } = usePostContext();
    const post = state.posts.find(post => post.id === parseInt(id));

    return (
        <div>
            <h2>post n°= {id}</h2>
            {post ? (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ) : (
                <p>Post non trouvé</p>
            )}
        </div>
    );
};

export default PostDetails;