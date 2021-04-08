//holds input field
    //text box to type in task --onclick fires the handler
//Add Todo Button
    //submit text to add to list, once submitted the list should rerender <prevent default is critical> the added todo
//Clear Completed Button
    //use .filter to call your handler function <in the App.js> to filter out any true toggles --onclick fires the handler
    //all the logic/code of .filter lives in App --**cannot pass down setState -- so use this.props.<filterhandlername>
    
const TodoForm = props => {
    console.log(props, 'props from todo on App.js');
    return null;
}

export default TodoForm;

//this.props.<changehandlername> --this goes on the button onclick
