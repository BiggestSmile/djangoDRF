import {Link} from 'react-router-dom'

const CustomProjectItem = ({project, deleteProject}) => {
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
            <td>
                <button onClick={() => deleteProject(project.id)}>Delete</button>
            </td>
        </tr>
    )
}

const CustomProjectList = ({projects, deleteProject}) => {
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
                <th></th>
            </tr>

            </thead>
            <tbody>
            {projects.map((project) => <CustomProjectItem key={project.id} project={project}
                                                          deleteProject={deleteProject}/>)}
            </tbody>

        </table>
    )
}

export default CustomProjectList
