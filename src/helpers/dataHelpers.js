
import {Link} from "react-router-dom";


export  const renderDataList = (data, style) => {
    return (
        <ul className={style}>
            {data.map(item => (
                <li key={item.id}>
                    <Link to="/services">{item.title} </Link>
                </li>
            ))}
        </ul>
    );
}

export  const renderPriceList = (data, style) => {
    return (
        <ul className={style}>
            {data.map(item => (
                <li key={item.id}>
                    <Link to="/services">{item.title}: {item.minPrice} гривень </Link>
                </li>
            ))}
        </ul>
    );
}