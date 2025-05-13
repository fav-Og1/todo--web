import { useState } from "react"


export function TodoInput (props){

    const { handleAddTodo } = props

    const [inputValue,setInputValue] = useState('');

        console.log(inputValue)

    return(
        <div className="input-container">
            <input  
            value={inputValue} 
             onChange={ (e) => {
                   setInputValue(e.target.value);
         }}
             placeholder="Add to task"/>

            <button
                onClick={ () => {
                    if (!inputValue) { return }
                    handleAddTodo(inputValue)
                    setInputValue('')
                }}
            >
                    <i className="fa fa-plus" aria-hidden="true"></i>
            </button>


        </div>  
    )
 
}