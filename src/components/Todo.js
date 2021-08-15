import React from 'react';

const Item = props => {
    return (
        <div
            onClick={() => props.toggleItem(props.Item.id)}
            className={`items${props.item.todo ? ' todo' : ''}`}
            >
            <p>props.item.name</p>        
        </div>
    );
};

export default Item;