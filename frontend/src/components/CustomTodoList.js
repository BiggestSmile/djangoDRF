const CustomTodoItem = ({todo}) => {
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

const CustomTodoList = ({todos}) => {
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
            {todos.map((todo) => <CustomTodoItem key={todo.id} todo={todo}/>)}
            </tbody>


        </table>
    )
}

export default CustomTodoList
