function Skills(props){

    const skillsStyle = {
        margin: 0
    }

    return props.data.map((skill) => <p style={skillsStyle}>{skill}</p>)
}
export default Skills;