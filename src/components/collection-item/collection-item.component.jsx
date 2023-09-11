import React from "react";
import { useNavigate } from 'react-router-dom';
import './collection-item.styles.scss';

const CollectionItem = ({ price, imageUrl, name, id }) => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate(linkUrl);
    // };

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price">{price}</span>
            </div>
        </div>
    );
};


export default CollectionItem;
