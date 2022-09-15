import React from 'react'


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'name': '',
            'text': '',
            'is_active': false,
            'project': null,
            'user': null
        }
    }

    handleNameChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleTextChange(event) {
        this.setState({
            [event.target.text]: event.target.value
        })
    }

    handleUsersSelect(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }

        let users = []

        for (let option of event.target.selectedOptions) {
            users.push(option.value)
        }

        this.setState({
            'users': users
        })
    }

    handleProjectsSelect(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'projects': []
            })
            return;
        }

        let projects = []

        for (let option of event.target.selectedOptions) {
            projects.push(option.value)
        }

        this.setState({
            'users': projects
        })
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.text, this.state.is_active, this.state.project, this.state.user)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" name="name" placeholder="name" value={this.state.name}
                           onChange={(event) => this.handleNameChange(event)}/>
                    <input type="text" name="text" placeholder="text" value={this.state.text}
                           onChange={(event) => this.handleRepoChange(event)}/>
                    <select multiple onChange={(event) => this.handleUsersSelect(event)}>
                        {this.props.users.map((user) => <option
                            value={user.id}> {user.username} {user.first_name} {user.last_name}</option>)}
                    </select>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}

export default TodoForm;