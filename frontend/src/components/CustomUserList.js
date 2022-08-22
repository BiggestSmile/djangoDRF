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

            <thead>
            <tr>
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
            </tr>
            </thead>

            <tbody>
                {/*{customUsers.map((customUser) => <CustomUserItem customUser={customUser}/>)}*/}
                {customUsers.map((customUser) => <CustomUserItem key={customUser.email} customUser={customUser}/>)}
            </tbody>

        </table>
    )
}

export default CustomUserList
