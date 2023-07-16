import React, { useEffect, useState } from 'react';
import './App.css';
const App = () => {
    const getData = () => {
        if (localStorage.getItem("mytodolist") !== null) {
            return JSON.parse(localStorage.getItem("mytodolist"));
        }
        else {
            return [];
        }
    }
    const [text, setText] = useState('');
    const [task, setTask] = useState(getData);
    const [btntext, setBtnText] = useState(false);
    const [editId, setEditId] = useState('');
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(task));
    }, [task]);

    const txtTaskOnChange = (event) => {
        setText(event.target.value);
    }
    const btnAdd = () => {
        if (btntext) {
            setTask(
                task.map((currentElement) => {
                    if (currentElement.id === editId) {
                        return { ...currentElement, "name": text };
                    }
                    else {
                        return currentElement;
                    }
                }));
            setText('');
        }
        else {
            const newTask = {
                id: new Date().getTime().toString(),
                name: text
            }
            setTask([...task, newTask]);
            setText('');
        }
    }
    const btnEdit = (index) => {
        const editObject = task.filter((taskObject) => {
            return taskObject.id === index
        });
        setText(editObject[0].name);
        setEditId(editObject[0].id)
        setBtnText(true);
    }
    const btnDelete = (index) => {
        const updatedList = task.filter(
            (taskObject) => {
                return taskObject.id !== index;
            }
        );
        setTask(updatedList);
    }
    return (
        <>
            <div className="container">
                <span className='header'>
                    Todo List
                </span>
                <div id="newtask">
                    <input type="text" value={text} name='txtTask' onChange={txtTaskOnChange} placeholder="Task to be done.." />
                    <button id="push" onClick={btnAdd}>{btntext ? 'Edit' : 'Add'}</button>
                </div>
                <div id="tasks">
                    {
                        task.map((value, index) => {
                            return (<div className="task" key={value.id}>
                                <span id="taskname">
                                    {value.name}
                                </span>
                                <div>
                                    <button className="edit" onClick={() => { btnEdit(value.id) }} >
                                        <i className="far fa-edit"></i>
                                    </button>
                                    <button className="delete" onClick={() => { btnDelete(value.id) }}>
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default App;
