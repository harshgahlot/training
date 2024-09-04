function Userdetails({user,method}) {
    return ( 
        <div>
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <button onClick={method}>click me</button>
        </div>
     );
}

export default Userdetails;