import React, {useState} from 'react';
import styles from './Modal.module.scss';
import {useSelector, useDispatch} from "react-redux";
import {toggleModal} from "../../store/mainSlice";
import classNames from "classnames";
import {AiOutlineClose} from "react-icons/ai";

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
                    <h3 className={styles.ModalContentDescriptionTitle}>
                        {selectedProduct.title}
                    </h3>
                    <span className={styles.ModalContentDescriptionText}>
            {selectedProduct.description}
          </span>
                </div>
            </div>
        </div>
    );
}

export default Modal;