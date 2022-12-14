import {Link} from "react-router-dom";

const CustomTodoItem = ({todo, deleteTodo}) => {
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
            <td>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </td>
        </tr>
    )
}

const CustomTodoList = ({todos, deleteTodo}) => {
    return (
        <div>
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
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => <CustomTodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
                </tbody>
            </table>
            <Link to='/create_todo'>
                <button>Create</button>
            </Link>
        </div>
    )
}

export default CustomTodoList
