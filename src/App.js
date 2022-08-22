import React, { useEffect, useState } from 'react';
import './App.css';
import TopBar from "./components/TopBar/TopBar";
import Form from "./components/Form/form";
//import Table from './components/Table/Table';
import axios from 'axios'



function App() {

  const [users, setUsers] = useState([]);

  const options = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: "GET"
  }

  async function fetchItems() {

    const res = await axios.request(options);
    const data = await res.data;
    setUsers(data);
    console.log(data);
  };

  if(users.length === 0){
    fetchItems();
  }

  

  

  useEffect(() => {
    //fetchItems();
  });

  return (
    <div className="container">
      <TopBar />
      <div className='row align-items-start'>
          <div className='col'>
            <Form />
          </div>
          <div className='col'>

              <table class="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                
                  {
                    users.map(user => 
                        (<tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                        </tr>)
                      
                    )
                  }
                </tbody>
                
              </table>

          </div>
      </div>
      
      
      

      
    </div>
  );
}

export default App;
