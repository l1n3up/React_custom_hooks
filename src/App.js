import React, {useRef, useState} from 'react';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
import axios from "axios";
import useRequest from "./hooks/useRequest";

function App(){
    // const ref = useRef();
    // const isBlackHovering = useHover(ref);
    // const [value, setValue] = useState('');
    // const debouncedSearch = useDebounce(search, 500);

    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos() {
         return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Error while loading</h1>
    }


    // function search(query) {
    //     fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json)
    //         })
    // }

    // const onChange = e => {
    //     setValue(e.target.value);
    //     debouncedSearch(e.target.value);
    // }





    return (
        <div >
            {todos && todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: "2px solid black"}}>{todo.id}. {todo.title}</div>
            )}
            {/*<Hover/>*/}
            {/*<div ref={ref} style={{width: 300, height: 300, background: isBlackHovering ? 'green' : "black"}}>*/}
            {/*</div>*/}

            {/*<List/>*/}

            {/*<div>*/}
            {/*    <input type="text" value={value} onChange={onChange}/>*/}
            {/*</div>*/}
        </div>
    )
}
export default App;
