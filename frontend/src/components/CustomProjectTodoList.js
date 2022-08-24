import {useParams} from 'react-router-dom'


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.name}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.user}
            </td>
        </tr>
    )
}

const ProjectTodoList = ({todos}) => {
    var {projectId} = useParams()
    // var filteredTodos = todos.filter((todo) => console.log(todo) || todo.projects.includes(parseInt(projectId)))
    var filteredTodos = todos.filter((todo) => todo.project === (parseInt(projectId)))

    return (
        <table>
            <thead>
            <tr>
                <th>
                    name
                </th>
                <th>
                    text
                </th>
                <th>
                    project
                </th>
                <th>
                    user
                </th>
            </tr>
            </thead>

            <tbody>
            {filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
            </tbody>

        </table>

    )
}

export default ProjectTodoList