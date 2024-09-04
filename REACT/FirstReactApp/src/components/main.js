import '../assets/mystyle.css';
import imgs from '../assets/logo192.png';
function Main() {
    const handleclick=()=>{
        alert('button clicked')
    }
    const myarr=[{id:1,name:'user1'},{id:2,name:'user2'},{id:3,name:'user3'},{id:4,name:'user4'}]
    return (
        <div>
            <h1>Harsh Gahlot</h1>
            <img src={imgs} height='100'></img>
            <button className='mybtn' onClick={handleclick}>button</button>
            <ul>
                {
                    myarr.map(item=>(
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
      );
}

export default Main;