// BASE URL OF OUR DEPLOYED API
// BASE URL OF OUR DEPLOYED API

const URL = "https://erlab-backend.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    console.log("in aboutloader fetch")
    const response = await fetch (URL + "/about")
    const about = await response.json()
    return about
}