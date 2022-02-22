import React from 'react'
import { Button, Container } from 'react-bootstrap'


const AUTH_URL = 'accounts.spotify.com/authorize?client_id=dcbbf4b7b8d342b8af54a2ee8341e308&response_type=code&redirect_uri=https://localhost:3000&scope=streaming%user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {


  return (
    <div>

        <Container>
        <Button variant="success" href={AUTH_URL}>Login</Button>


        </Container>
       
    </div>
  )
}
