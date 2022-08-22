import React, {useState} from 'react'
import axios from 'axios'
//import "././form.css"



function Form() {
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('')

    const postData = () => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
            firstName,
            userName, 
            email
        })
        .then(function (response) {
            console.log(response);
        })
    };


  return (<div className="userData">
            

            <form >
                <label>Enter your name:</label>
                <input class="form-control" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                <label>Enter UserName:</label>
                <input class="form-control" placeholder='Username' onChange={(e) => setUserName(e.target.value)}/>
                <label>Enter Email</label>
                <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} ></input>
                <button class="btn btn-primary" onClick={postData} type='button'>Submit</button>
            </form>
    </div>
   

  );
}

export default Form