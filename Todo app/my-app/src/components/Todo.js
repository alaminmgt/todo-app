import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {addTodo,deleteTodo,removeAll} from "../actions/index"

const Todo = () => {
    const [userInput, setUserInput] = useState("");
    const [showbtn, setShowbtn] = useState(false);
    const list = useSelector((state)=>state.todoreducer.list);
    const dispatch = useDispatch();

    
  return (
    <>
        <div style={{textAlign : "center"}} className='main-div'>
            <div className="child-div">
                <figure>
                    <figcaption className='heading'>Add your task ✌</figcaption> 
                </figure>
                <div className="add-items">
                    <input type="text" placeholder='✍ add item...'
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                    />
                    <i className='fa fa-plus add-btn' title='Add'
                     onClick={()=>dispatch(addTodo(userInput),
                     setUserInput(""),setShowbtn(true))}></i>
                </div>
                <div className="show-items">
                    {
                        list.map((elem)=>{
                            return(
                                <div className="each-item" key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <i className='fa fa-trash delete-btn' title='Delete'
                                    onClick={()=>dispatch(deleteTodo(elem.id))}></i>
                                </div>
                            )
                        })
                    }
                    
                </div>
                {showbtn &&<>
                    <div className="show-items">
                    <button className='removeAll-btn' onClick={()=>dispatch(removeAll(),setShowbtn(false))}>Remove All</button>
                </div></>
                }
            </div>
      </div>
    </>
  )
}

export default Todo


