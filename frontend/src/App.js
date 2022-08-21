import React from 'react'
import axios from 'axios'
import AuthorList from './components/AuthorList.js'
import CustomUserList from './components/CustomUserList.js'
import Footer from './components/Footer';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'authors': [],
            'customUsers': [],
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8008/api/authors/')
            .then(response => {
                const authors = response.data.results
                this.setState(
                    {
                        'authors': authors,
                    }
                )
            })
            .catch(error => console.log(error))

        axios
            .get('http://127.0.0.1:8008/api/custom-users/')
            .then(response => {
                const customUsers = response.data.results
                this.setState(
                    {
                        'customUsers': customUsers,
                    }
                )
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path='/' exact component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/events' component={Events} />
                            <Route path='/annual' component={AnnualReport} />
                            <Route path='/team' component={Teams} />
                            <Route path='/blogs' component={Blogs} />
                            <Route path='/sign-up' component={SignUp} />
                        </Routes>
                    </Router>
                </div>
                <div>
                    <span>
                        <AuthorList authors={this.state.authors}/>
                        {/*<CustomUserList customUsers={this.state.customUsers}/>*/}
                    </span>
                    <span>
                        {/*<AuthorList authors={this.state.authors}/>*/}
                        <CustomUserList customUsers={this.state.customUsers}/>
                    </span>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
