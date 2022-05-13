const BioData = (props) =>{
    return(
        <div className = "bio-data">
      <h2>Cv of {props.name}</h2>
      <div className="personal-info">
        <h2>Personal Info:</h2>
        <p>Mobule: {props.mobile}</p>
        <p>email: {props.email}</p>
        <p>linkedin: {props.linkedin}</p>
        <p>github: {props.github}</p>
      </div>
      <hr/>
      <div className = "skills">
        <p>My skills: </p>
        <ul>
          {/* <li>Js</li>
          <li>React</li>
          <li>Node</li> */}
          {props.skills.map( skill => (
              <li>{skill}</li>
          ))}
        </ul>
      </div>
      <hr/>
      <div className="interests">
        <p>My Interests: </p>
        <ul>
            {props.interests.map(interest => (
                <li>{interest}</li>
            ))}
        </ul>
      </div>
      <hr/>
      <hr/>
      </div>
    )
}
export default BioData