import React from 'react';

const Item = (props) => {

    const {name, description, img} = props.contact;

    return (
        <li>
            <div className="media">
                <div className="media-left align-self-center">
                    <img className="rounded-circle" src={img}/>
                </div>
                <div className="media-body">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
                <div className="media-right align-self-center">
                    <a href="#" className="btn btn-default">Contact Now</a>
                </div>
            </div>
        </li>
    );
};

export default Item;
