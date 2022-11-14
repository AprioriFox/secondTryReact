const User = (props) =>{

    console.log(props);
    return(
        <>
            <p>Name: {props.userInfo.name}</p>
            <p>Age: {props.userInfo.age}</p>
            <p>Position: {props.userInfo.position}</p>
        </>
    )
}

export default User;