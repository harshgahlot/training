import { Navigate } from "react-router-dom";

function Protectedroute({isAUthenticated,children}) {
    
    return ( 
        <>
        {isAUthenticated?children:<Navigate to='/login' />}
        </>
     );
}

export default Protectedroute;