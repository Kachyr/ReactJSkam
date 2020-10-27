import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white' ,position:"absolute",top:"50%",left:"50%"} }>
        <img src={preloader} />
    </div>
}

export default Preloader;