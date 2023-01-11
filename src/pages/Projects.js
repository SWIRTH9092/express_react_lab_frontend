import { useLoaderData } from "react-router-dom";

function Projects(props){ 

    const projects = useLoaderData()

    return projects.map((project) => (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name}/>
            <br></br>
            <br></br>
            <a href={project.git} target="_blank">
                <button>Github</button>
            </a>
            <a href={project.live} target="_blank">
                <button>Live Site</button>
            </a>
            <br></br>
            <br></br>
        </div>
    )
    )
}

export default Projects;