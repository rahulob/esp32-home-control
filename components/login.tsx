import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../lib/AuthContext'
import styles from '../styles/Home.module.scss'
type Props = {}

export default function Login({ }: Props) {
  const { signIn } = useAuth()
  const handleLogin = async (event: any) => {
    setDisabled(true)
    event.preventDefault()
    signIn(email, password)
      .then(() => { toast.success("Signed In succesfully") })
      .catch((err: any) => {
        console.log(err)
        toast.error("SignIn Failed! Try again")
        setDisabled(false)
      })
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)
  return (
    <form className={styles.form} onSubmit={(e) => handleLogin(e)}>
      <h1 className={styles.title}>Sign In <br />to show controllers</h1>
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