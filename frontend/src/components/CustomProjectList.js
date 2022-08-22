import {Link} from 'react-router-dom'

const CustomProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {/*{project.name}*/}
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </td>
            <td>
                {project.repo_link}
            </td>
            <td>
                {project.users}
            </td>
        </tr>
    )
}

const CustomProjectList = ({projects}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>
                    name
                </th>
                <th>
                    repo_link
                </th>
                <th>
                    users
                </th>
            </tr>
            </thead>
            <tbody>
                {projects.map((project) => <CustomProjectItem key={project.id} project={project}/>)}
            </tbody>

        </table>
    )
}

export default CustomProjectList
