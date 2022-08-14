const CustomUserItem = ({customUser}) => {
    return (
        <tr>
            <td>
                {customUser.username}
            </td>
            <td>
                {customUser.first_name}
            </td>
            <td>
                {customUser.last_name}
            </td>
            <td>
                {customUser.email}
            </td>
        </tr>
    )
}

const CustomUserList = ({customUsers}) => {
    return (
        <table>
            <th>
                Username
            </th>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
            {customUsers.map((customUser) => <CustomUserItem customUser={customUser}/>)}
        </table>
    )
}

export default CustomUserList
