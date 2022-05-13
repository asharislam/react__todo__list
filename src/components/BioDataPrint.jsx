const BioDataPrint = (props) => {
    return(
        <div className="container">
            <h2>Cv of {props.name}</h2>
            <h3>Personal Information</h3>
            {
                props.skills.map(skill => (
                    <p>{skill}</p>
                ))
            }
        </div>
    )
}
export default BioDataPrint;