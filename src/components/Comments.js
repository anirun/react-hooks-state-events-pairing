import React, { useState } from "react";

function Comments({comments}) {

    const [isShown, setIsShown] = useState(true)

    function handleComments(){
        setIsShown((isShown)=>!isShown)
    } 

    const commentArray = comments.map((comment) => {
        return (
        <div>
            <h3 key={comment.id}>{comment.user}</h3>
            <p key={comment.user + comment.id}>{comment.comment}</p>
        </div>)
    })

    const showOrNo = isShown ? commentArray : null

    return (
        <div>
            <br></br>
            <button onClick={handleComments}>Hide Comments</button>
            <hr/>
            {showOrNo}
        </div>
    )
};

export default Comments;