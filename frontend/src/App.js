import React from 'react'
import axios from 'axios'
import AuthorList from './components/AuthorList.js'
import CustomUserList from './components/CustomUserList.js'
import Footer from './components/Footer';

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
                const authors = response.data
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
                const customUsers = response.data
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
