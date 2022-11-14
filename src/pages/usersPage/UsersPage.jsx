import User from "../../components/user/User"
import UsersList from "../../components/usersList/UsersList"


const UsersPage = () => {

    const user = {
        name:'Kirill',
        age: 21,
        position: "FrontEnd Dev"
    }


    const user2 = {
        name:'Anna',
        age: 20,
        position: "Java Dev"
    }

    const users = ["Kirill",'Dastan','Anna','Ali', 'Artem']
    return (
        <>
            <h1>Info about one user</h1>
            <User userInfo = {user}/>
            <User userInfo = {user2}/>
            <h1>--------------------</h1>
            <h1>Users List</h1>
            <UsersList usersList={users}/>
        </>
    )
}

export default UsersPage