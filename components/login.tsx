import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAuth } from '../lib/AuthContext'
import styles from '../styles/Home.module.scss'
type Props = {}

export default function Login({ }: Props) {
  const { signIn } = useAuth()
  const handleLogin = async (event: any) => {
    setDisabled(true)
    event.preventDefault()
    console.log("Login");
    try {
      signIn(email, password)
    } catch (err) {
      console.log(err)
    }
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)
  return (
    <form className={styles.container} onSubmit={(e) => handleLogin(e)}>
      <TextField
        id="email" label="Email"
        variant="outlined" type="email"
        value={email}
        className={styles.textField}
        onChange={(e) => setEmail(e.target.value)} required disabled={disabled} />
      <TextField
        id="password" label="Password"
        variant="outlined" type="password"
        value={password}
        className={styles.textField}
        onChange={(e) => setPassword(e.target.value)} required disabled={disabled} />
      <Button variant='contained' type='submit' disabled={disabled}>SIGN IN</Button>
    </form>
  )
}