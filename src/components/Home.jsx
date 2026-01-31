import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = (props) => {
  const {name, age, setName, setAge} = props;

  const navigate = useNavigate();

  const handleSubmit = () =>{
    navigate("/child");
  };

  return (
    <>
    <div>
    <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
    <br />
    <input type="number" placeholder='Enter your age' value={age} onChange={(e) => setAge(Number(e.target.value))} />
    

    </div>

    <button onClick= {handleSubmit}>Submit</button>
    </>
  );
};

export default Home