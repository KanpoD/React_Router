import React from 'react';
import {useParams} from "react-router-dom";
import PostDetails from '../../component/PostDetails.jsx';

const Param = () => {

    const {id} = useParams()
    console.log(id)

    return (
        <div>
            <PostDetails/>
        </div>
    );
};

export default Param;