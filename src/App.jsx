import React from 'react';
import './App.css';
const App = () => {
    return (
        <>
            <div className="container">
                <span className='header'>
                    Todo List
                </span>
                <div id="newtask">
                    <input type="text" placeholder="Task to be done.." />
                    <button id="push">Add</button>
                </div>
                <div id="tasks">
                    <div className="task">
                        <span id="taskname">
                            ss
                        </span>
                        <div>
                            <button className="edit">
                                <i className="far fa-edit"></i>
                            </button>
                            <button className="delete">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>

                    <div className="task">
                        <span id="taskname">
                            ss
                        </span>
                        <div>
                            <button className="edit">
                                <i className="far fa-edit"></i>
                            </button>
                            <button className="delete">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default App;
