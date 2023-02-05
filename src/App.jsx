import { useState,useRef,useEffect } from 'react'
import {Body,Box,Form,Group,Forgot,Inpu} from './styled'
import user from './assets/user.png';
import lock from './assets/lock.png';



function App() {

  const[name,setName] = useState('write');

  const renders = useRef (0);

  useEffect( () => {
    renders.current = renders.current + 1;
  } );

  return (
    <Body>
      <Box>
        <h2>Welcome back</h2>
        <p>Enter your details</p>

        <Form>
        <Group>
          <div>
           <label For="name">Name</label>
           <label For="name"> {name} </label>
          </div>
           
           <i><img src= {user} alt="user" /></i>
           <input 
           value={name} onChange={(e) => setName(e.target.value)}
           type="name" 
           id='Name' 
           placeholder='Your Name'
           required
           />
          </Group>
        <Group>
          <div>
           <label For="email">Email</label>
           <label For="email"> Render: {renders.current} </label>
          </div>
           <i><img src= {user} alt="user" /></i>
           <input 
           type="email" 
           id='email' 
           placeholder='Your email'
           required
           />
          </Group>
          <Group>
           <label For="password">Password</label>
           <i><img src= {lock} alt="lock" /></i>
           <input 
           type="password" 
           id='password' 
           placeholder='Your password'
           required
           />
          </Group>

          <Forgot>
            Forgot your password?
          </Forgot>

          <Inpu type="submit" value='Log In' />

        </Form>

      </Box>
    </Body>
  )
}

export default App
