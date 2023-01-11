import { useLoaderData } from "react-router-dom";
import Skills from "../components/Skills";

function Home(props) {
  //inline style for the nav tag


  const skillsContainer = {
    display: "inline-block",
    textAlign: "center",
    margin: ".5rem",
    width: "14rem",
    height: "15rem",
    border: "5px solid black",
    borderRadius: "80px"

  }

    // const skillsGrid = {
    //     display: "grid-inlineblock"
    // }
    // const skillsContainer = {
    //     flex: 1,
    //     minWidth: "14rem",
    //     maxWidth: "14rem",
    //     height: "15rem",
    //     justifyContent: "center",
    //     alignItems: "center"
    // }

  const textStyles = {
    margin: '2% 20% 2% 20%',
    textAlign: "left",
    textIdent: "2%"
  }


    const skills = useLoaderData()

    return (
        <div>
            <h2 style={textStyles}>I design responsive web-based and remote servers apps using JavaScript, Express, React, MongoDB and Node.js following MVC organization that are efficient, scalable to provide for a positive user-end experience. </h2>
            <h2 style={textStyles}>I have 15 years of designing, coding, and debugging experience with the following technologies: JavaScript, SQL, Visual Basic, Cobol, Microsoft SQL Server, Access Database, Db2, and VSAM files. I have coding in my blood for when I was not employed in the industry, designed and coded Microsoft Access Databases using the Visual basic for volunteer organizations.</h2>
            <h2 style={textStyles}>I enjoy figuring out complex problems and problem-solving skills by solving looking at the input and output and figuring out the one piece at a time to the resolution.</h2>
            <div>
                {skills.map((skill) => (
                    <div style={skillsContainer}>
                        <dl><b><p>{skill.topic}</p></b>   
                            <Skills data={skill.skills} /> 
                        </dl> 
                        <br></br>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;