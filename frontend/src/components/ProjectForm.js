import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'name': '',
            'repo_link': '',
            'users': []
        }
    }

    handleNameChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRepoChange(event) {
        this.setState({
            [event.target.name]: event.target.value
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
            console.log(option.value)
        }
        console.log(users)

        this.setState({
            'users': users
        })
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.repo_link, this.state.users)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" name="name" placeholder="name" value={this.state.name}
                           onChange={(event) => this.handleNameChange(event)}/>
                    <input type="url" name="repo_link" placeholder="repo_link" value={this.state.repo_link}
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

export default ProjectForm;