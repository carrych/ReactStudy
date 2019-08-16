import React from 'react';
import Item from '../../components/Item/Item';

const List = (props) => {

    const contact = props.contacts.map((item)=>{
        return(
            <Item contact={item}/>
        );
    });

    return (
        <div className="col-md-10 offset-md-1 row-block">
            <ul id="sortable">
                {contact}
            </ul>
        </div>
    );
};

export default List;
