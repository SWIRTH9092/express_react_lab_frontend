import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { aboutLoader, projectsLoader, skillsLoader } from "./loaders.js"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>} loader={skillsLoader} />
        <Route path="/about" element={<About/>} loader={aboutLoader}/>
        <Route path="/projects" element={<Projects/>} loader={projectsLoader}/>
    </Route>
))

export default router;