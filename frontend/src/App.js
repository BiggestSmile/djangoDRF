// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
// } from './components/Navbar/NavbarElements';
//

import React from 'react'
import axios from 'axios'
import CustomUserList from './components/CustomUserList.js'
import CustomProjectList from "./components/CustomProjectList";
import CustomTodoList from "./components/CustomTodoList";
import ProjectTodoList from "./components/CustomProjectTodoList";
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

import './App.css';
import Navbar from './components/Navbar';
import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate, useLocation} from 'react-router-dom'


const NotFound = () => {
    let {pathname} = useLocation()

    return (
        <div>
            Page "{pathname}" not found
        </div>
    )
}


class App extends React.Component {
    Undefined;

    constructor(props) {
        super(props)

        this.state = {
            'customUsers': [],
            'projects': [],
            'todos': [],
            'token': '',
        }
    }

    obtainAuthToken(login, password) {
        axios
            .post('http://127.0.0.1:8008/api-token-auth/', {
                'username': login,
                'password': password
            })
            .then(response => {
                const token = response.data.token
                console.log('token:', token)
                localStorage.setItem('token', token)
                this.setState({
                    'token': token
                }, this.getData)
            })
            .catch(error => console.log(error))
    }

    isAuth() {
        console.log(this.state.token)
        console.log(!!this.state.token)
        return !!this.state.token
        // return this.state.token != ''
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        this.setState({
            'token': token
        }, this.getData)
    }

    // getHeaders() {
    //     if (this.isAuth()) {
    //         return {
    //             'Authorization': 'Token ' + this.state.token
    //         }
    //     }
    //     return {}
    // }

    getHeaders() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.isAuth()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    getData() {
        let headers = this.getHeaders()

        axios
            .get('http://127.0.0.1:8008/api/custom-users/', {headers})
            .then(response => {
                const customUsers = response.data
                this.setState(
                    {
                        'customUsers': customUsers,
                    }
                )
            })
            .catch(error => {
                console.log(error)
                this.setState({'customUsers': []})
            })

        axios
            .get('http://127.0.0.1:8008/api/projects/', {headers})
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects,
                    }
                )
            })
            .catch(error => {
                console.log(error)
                this.setState({'projects': []})
            })

        axios
            .get('http://127.0.0.1:8008/api/todos/', {headers})
            // .get('http://localhost:8008/api/todos/?project=&created_at=&is_active=true', {headers})
            .then(response => {
                const todos = response.data
                this.setState(
                    {
                        'todos': todos,
                    }
                )
            })
            .catch(error => {
                console.log(error)
                this.setState({'todos': []})
            })
    }

    deleteProject(projectId) {
        const headers = this.getHeaders()
        axios.delete(`http://127.0.0.1:8008/api/projects/${projectId}`, {headers})
            .then(response => {
                this.setState({projects: this.state.projects.filter((item) => item.id !== projectId)})
            }).catch(error => console.log(error))
    }

    deleteTodo(todoId) {
        const headers = this.getHeaders()
        axios.delete(`http://127.0.0.1:8008/api/todos/${todoId}`, {headers})
            .then(response => {
                this.setState({todos: this.state.todos.filter((item) => item.id !== todoId)})
            }).catch(error => console.log(error))
    }

    logOut() {
        localStorage.setItem('token', '')
        this.setState({
            'token': '',
        }, this.getData)
    }

    render() {
        return (
            <div>
                <div>
                    <BrowserRouter>
                        <Navbar isAuth={this.isAuth()} logOut={() => this.logOut()}/>
                        {/*{this.isAuth() ? <NavBtn onClick={() => this.logOut()}>Logout</NavBtn> : <NavBtnLink to='/login'>Login</NavBtnLink> }*/}
                        <Routes>
                            <Route exact path='/' element={<Navigate to='/customUsers'/>}/>
                            <Route exact path='/todos' element={<CustomTodoList todos={this.state.todos} deleteTodo={(todoId) => this.deleteTodo(todoId)}/>}/>
                            <Route exact path='/customUsers'
                                   element={<CustomUserList customUsers={this.state.customUsers}/>}/>
                            <Route exact path='/login' element={<LoginForm
                                obtainAuthToken={(login, password) => this.obtainAuthToken(login, password)}/>}/>
                            <Route path='/projects'>
                                <Route index element={
                                    <CustomProjectList projects={this.state.projects}
                                                       deleteProject={(projectId) => this.deleteProject(projectId)}
                                    />
                                }/>
                                <Route path=':projectId' element={<ProjectTodoList todos={this.state.todos}/>}/>
                            </Route>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default App;
