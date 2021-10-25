import React from "react";
import Todo from "./Todo";

const GroceryList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Todo handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GroceryList;