// import React,{useState,useRef} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import './Form.css';
// const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;
// const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash}/>;


// const Form = () => {   
// const [formdata,setformdata]=useState({
// email:'',
// password:'',
// })

// const {
// email,
// password,
// } = formdata;
// const[show,setshow]=useState(false)
// const pass = useRef();
// const change=(e)=>{
// setformdata({...formdata,[e.target.name]:e.target.value})
// }
// const submit = e =>{
//     e.preventDefault();
// setformdata({
// name:'',
// email:'',
// password:''
// })
// setshow(false)
// }

// const showpassword = () =>{

// setshow(!show)
// pass.current.type = show ? 'password':'text';

// }
//     return (
//         <div>
//             <form onSubmit={submit}>

// <div className="grid">

// <div className="topic">Register Form</div>
// <div className="label">Email:</div>
// <input type = "email" value={email} placeholder="Enter Email"name="email" onChange={change}></input>

// <div className="label">Password:</div>
// <div className="eye">
    

// <input ref={pass} type = "password" placeholder="Enter Password"value={password} name="password" onChange={change}></input>
    
// {show ? <i onClick={showpassword}>{Eye}</i>:<i onClick={showpassword}>{EyeSlash}</i>}



// </div>


// <div>
// <input type = "submit"  name="submit" ></input>
// </div>
// </div>

//             </form>
//         </div>
//     )
// }

// export default Form;