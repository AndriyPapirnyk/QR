import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login(props: any) {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');

    const inputHandle= (e: any) => {
        let lowerCase = e.target.value.toLowerCase();
        setUserName(lowerCase);
    }
    
    const createUserHandle = async () => {
        setUserName('')
        if(userName.length >= 3){
            await axios.post('http://localhost:8000/api/user/createUser', {userName})
            .then((response) => {
              if(response.status === 200){
                console.log('dassd')
                props.setIdentificateKe(true);
                navigate('/Container');
                console.log(props.identificateKey)
              }else{
                alert('somethin went wrong');
              }
            })
            .catch((error) => {
                console.error('Error:', error);
            }); 
        }else{
            alert('your name is too short')
        }
    }

  return (
    <div className="login">
        <input type="text" className="login__inp" name='login__inp' placeholder='NickName' onChange={inputHandle} value={userName}/>
        <div className="login__btn" onClick={createUserHandle}>Submit</div>
    </div>
  )
}
