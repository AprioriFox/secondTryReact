const UsersList = (props) =>{

    console.log(props);
    return (
        <>
            {
                props.usersList.map((user,index) => <p key= {index}>Name:{user}</p>)
            }
        </>
    )
}

export default UsersList