import React from "react";

const Scroll = (probs) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
            {probs.children}
        </div>
    )
}

export default Scroll;