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
            [event.target.name]: event.target.value
        })
    }

    handleIsActiveChange(event) {
        this.setState({
            'is_active': true,
        })
    }

    handleProjectSelect(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'project': null,
            })
            return;
        }

        let projects = []

        for (let option of event.target.selectedOptions) {
            projects.push(option.value)
            console.log(option.value)
        }
        console.log(projects)

        let project = projects[0]
        console.log(project)

        this.setState({
            'project': project
        })
    }

    handleUserSelect(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'user': null,
            })
            return;
        }

        let users = []

        for (let option of event.target.selectedOptions) {
            users.push(option.value)
            console.log(option.value)
        }
        console.log(users)

        let user = users[0]
        console.log(user)

        this.setState({
            'user': user
        })
    }

    handleSubmit(event) {
        this.props.createTodo(this.state.name, this.state.text, this.state.is_active, this.state.project, this.state.user)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" name="name" placeholder="name" value={this.state.name}
                           onChange={(event) => this.handleNameChange(event)}/>
                    <input type="text" name="text" placeholder="text" value={this.state.text}
                           onChange={(event) => this.handleTextChange(event)}/>
                    <input type="checkbox" name="is_active" placeholder="is_active"
                           defaultChecked={this.state.is_active}
                           onChange={(event) => this.handleIsActiveChange(event)}/>
                    <select onChange={(event) => this.handleProjectSelect(event)}>
                        {this.props.projects.map((project) => <option
                            value={project.id}> {project.name} {project.repo_link}</option>)}
                    </select>
                    <select onChange={(event) => this.handleUserSelect(event)}>
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