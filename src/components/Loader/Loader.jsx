import React from 'react';
import {Hearts} from "react-loader-spinner";

function Loader(props) {
    return (
    <Hearts
        height="150"
        width="150"
        color="#FFC0CBFF"
        ariaLabel="hearts-loading"
        wrapperStyle={{marginLeft: '50%', marginTop: '15%'}}
        wrapperClass=""
        visible={true}
    />
    );
}

export default Loader;