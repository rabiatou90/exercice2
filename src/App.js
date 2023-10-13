import  { useState} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import SubmitForm from './components/SubmitForm';

function App() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (newTodo)=>{
        setTodos([...todos, newTodo]);
    };

    return(
        <div className='app'>
            <Header />
            <TodoList todos={todos}/>
            <SubmitForm addToto={addTodo}/>
        </div>
    );
}

export default App;

