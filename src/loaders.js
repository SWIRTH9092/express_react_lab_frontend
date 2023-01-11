// BASE URL OF OUR DEPLOYED API
// BASE URL OF OUR DEPLOYED API

const URL = "https://erlab-backend.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch (URL + "/about")
    const about = await response.json()
    return about
}

export const skillsLoader = async () => {
    console.log("in skillsloader fetch")
    const response = await fetch (URL + "/skills")
    const skills = await response.json()
    return skills
}