// import {PropTypes} from 'prop-types';
function Gretting({name,message}) {
    // const {name,message}=props;
    // const name=props.name;
    // const message=props.message;

    return ( 
        <>
            <h3>{name?name:'Guest'} {message?message:'Welcome'}</h3>
        </>
     );
}

// Gretting.defaultProps={
//     name:'Guest',
//     message:'Welcome'
// }
// Gretting.propTypes={
//     name:PropTypes.string.isRequired,
//     message:PropTypes.string.isRequired
// }
export default Gretting;
