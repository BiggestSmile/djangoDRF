import React from 'react'
import axios from 'axios'
import AuthorList from './components/AuthorList.js'
import CustomUserList from './components/CustomUserList.js'
import CustomProjectList from "./components/CustomProjectList";
import CustomTodoList from "./components/CustomTodoList";
import ProjectTodoList from "./components/CustomProjectTodoList";
import Footer from './components/Footer';

import './App.css';
import Navbar from './components/Navbar';
import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate, useLocation} from 'react-router-dom'


const NotFound = () => {
    var {pathname} = useLocation()

    return (
        <div>
            Page "{pathname}" not found
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'customUsers': [],
            'projects': [],
            'todos': [],
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8008/api/custom-users/')
            .then(response => {
                const customUsers = response.data
                this.setState(
                    {
                        'customUsers': customUsers,
                    }
                )
            })
            .catch(error => console.log(error))

        axios
            .get('http://127.0.0.1:8008/api/projects/')
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects,
                    }
                )
            })
            .catch(error => console.log(error))

        axios
            .get('http://127.0.0.1:8008/api/todos/')
            .then(response => {
                const todos = response.data
                this.setState(
                    {
                        'todos': todos,
                    }
                )
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route exact path='/' element={<Navigate to='/customUsers' />} />
                            <Route exact path='/todos' element={<CustomTodoList todos={this.state.todos}/>} />
                            <Route exact path='/customUsers' element={<CustomUserList customUsers={this.state.customUsers}/>} />
                            <Route path='/projects'>
                                <Route index element={<CustomProjectList projects={this.state.projects}/>} />
                                <Route path=':projectId' element={<ProjectTodoList todos={this.state.todos}/>} />
                            </Route>
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default App;
