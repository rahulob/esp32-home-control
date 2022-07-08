import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ToggleSwitch from './toggle-switch'
import styles from '../styles/Home.module.scss'
import { useAuth } from '../lib/AuthContext';
import { child, get, ref, update } from 'firebase/database';
import { database } from '../lib/firebase';

export default function ControlPage() {
  const refDb = ref(database)
  const context = useAuth()
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [turnOff, setTurnOff] = useState(false);
  get(child(refDb, `/Data`))
    .then((snapshot) => {
      const value = snapshot.val()
      setValue1(value.Relay1)
      setValue2(value.Relay2)
      setValue3(value.Relay3)
      setValue4(value.Relay4)
    })
    .catch((error) => {
      console.error(error);
    })
  useEffect(() => {
    if (value1 || value2 || value3 || value4)
      setTurnOff(false)
    else setTurnOff(true)
  }, [value1, value2, value3, value4])


  const toggleRelay = (variable: string) => {
    const updates: { [key: string]: boolean } = {}
    updates[`/Data/Relay${variable}`] = true
    return update(refDb, updates)
  }
  const turnOffAll = () => {
    const updates: { [key: string]: boolean } = {}
    updates['/Data/Relay1'] = false
    updates['/Data/Relay2'] = false
    updates['/Data/Relay3'] = false
    updates['/Data/Relay4'] = false
    return update(refDb, updates)
      .then(() => {
        setValue1(false)
        setValue2(false)
        setValue3(false)
        setValue4(false)
      })
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Button variant='contained' onClick={context.logOut} >Log out</Button>
      </nav>
      <div className={styles.container}>
        <h1 className={styles.title}>Controllers</h1>
        <ToggleSwitch className={styles.btn} label="Relay 1" value={value1} onChange={() => toggleRelay('1').then(() => setValue1(!value1))} />
        <ToggleSwitch className={styles.btn} label="Relay 2" value={value2} onChange={() => toggleRelay('2').then(() => setValue2(!value2))} />
        <ToggleSwitch className={styles.btn} label="Relay 3" value={value3} onChange={() => toggleRelay('3').then(() => setValue3(!value3))} />
        <ToggleSwitch className={styles.btn} label="Relay 4" value={value4} onChange={() => toggleRelay('4').then(() => setValue4(!value4))} />
        <Button variant='contained' className={styles.btn_last} onClick={turnOffAll} disabled={turnOff}>Turn off all appliances</Button>
      </div>
    </>
  )
}