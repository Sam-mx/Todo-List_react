import React, {useState,useEffect, useRef} from 'react'

function Todoform(props) {
    const [input, setInput] = useState(props.edit? props.edit.value:'');

    const inputFocus = useRef(null)

    useEffect(() => {
        inputFocus.current.focus()
    })

    const ChangeSumbit =  e =>{
        setInput(e.target.value);
    };

    const SubmitButton = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('')
    };

  return (
    <form className='todo-form' onSubmit={SubmitButton}>
        {props.edit ? (
            <>
        <input 
        type="text" 
        placeholder='Update your ideas' 
        value={input} 
        name='text' 
        className='todo-input'
        onChange={ChangeSumbit}
        ref={inputFocus}
        />
        
    <button className='todo-button edit'>Update</button>
    </>
    ) :
    (
    <>
    <input 
        type="text" 
        placeholder='Write down your ideas' 
        value={input} 
        name='text' 
        className='todo-input'
        onChange={ChangeSumbit}
        ref={inputFocus}
        />
        
    <button className='todo-button'>Add</button>
    </>
    )
    }
        
    </form>
  )
}

export default Todoform
