import React from 'react';
import {Link} from "react-router-dom";

function PageNotFound(props) {
    return (
        <div> Сторінка не знайдена! Перейти на  <Link to='/'>Головну</Link> </div>
    );
}

export default PageNotFound;