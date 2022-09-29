import { useLayoutEffect, useState } from "react";

const Comments = ({postId}) => {
    useLayoutEffect(()=>{
        
    },[postId]);

    const [showTextAre, setShowTextArea] = useState(false);
    return(
        <div>
            {
                showTextAre ? (
                    <textarea></textarea>
                ): (

                )
            }
        </div>
    )
};
export default Comments