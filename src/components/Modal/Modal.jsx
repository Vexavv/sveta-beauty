import React, {useState} from 'react';
import styles from './Modal.module.scss';
import {useSelector, useDispatch} from "react-redux";
import {toggleModal} from "../../store/mainSlice";
import classNames from "classnames";
import {AiOutlineClose} from "react-icons/ai";
import HTag from "../HTag/HTag";

function Modal(props) {
    const dispatch = useDispatch();
    const {isOpen, selectedProduct} = useSelector((state) => state.main);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleClose = () => {
        setSelectedImage(null);
        dispatch(toggleModal(false));
    };
    if (!selectedProduct) {
        return null;
    }
    return (
        <div className={
            isOpen ? classNames(styles.Modal, styles.Active) : styles.Modal
        }
             onClick={handleClose}>
            <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
                <AiOutlineClose
                    onClick={handleClose}
                    className={styles.ModalContentClosed}
                />
                <div className={styles.ModalContentPicture}>
                    <img
                        className={styles.ModalContentPictureImg}
                        src={selectedImage || selectedProduct.imageUrl[0]}
                        alt="product"
                    />
                    <ul className={styles.ModalContentPictureCarousel}>
                        {selectedProduct.imageUrl.map((img, index) => {
                            return (
                                <li key={index}>
                                    <img
                                        src={img}
                                        alt="product"
                                        onClick={() => setSelectedImage(img)}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={styles.ModalContentDescription}>
                    <HTag tag='h4'>{selectedProduct.title}</HTag>
                    <span className={styles.ModalContentDescriptionText}>Ціна: <span>{selectedProduct.minPrice}</span>  гривень</span>
                    <p className={styles.ModalContentDescriptionText}>Час
                        виконання: <span>{selectedProduct.minTime}</span> хвилин</p>
                    <p className={styles.ModalContentDescriptionText}>
                        {selectedProduct.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Modal;