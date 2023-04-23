
import styles from "../components/ServiceList/ServiceList.module.scss";
import {Link} from "react-router-dom";


export  const renderDataList = (data) => {
    return (
        <ul className={styles.ListContentDescriptionList}>
            {data.map(item => (
                <Link to="/services" key={item.id}>
                    <li>{item.title}</li>
                </Link>
            ))}
        </ul>
    );
}