import { useEffect } from "react";
import Main from "./components/Main/Main";
import axios from 'axios';



function App() {

  useEffect(()=>{
    const postHandle = async () => {
      await axios.post('http://localhost:8000/api/user/getUser', {})
      .then((response) => {
        if(response.status !== 404){ 
          console.log('dad');
        }else{
          alert('somethin went wrong');
        }
      })
      .catch((error) => {
          console.error('Error:', error);
      }); 
    }
    postHandle()
  },[])

  return (
    <>
      <Main />
    </>
  )
}

export default App
