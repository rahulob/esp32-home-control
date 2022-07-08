import { Button } from '@mui/material';
import React, { useState } from 'react'
import ToggleSwitch from '../components/toggle-switch'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [value, setValue] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Controllers</h1>
      <ToggleSwitch className={styles.btn} label="Relay 1" value={value} onChange={() => setValue(!value)} />
      <ToggleSwitch className={styles.btn} label="Relay 2" value={value} onChange={() => setValue(!value)} />
      <ToggleSwitch className={styles.btn} label="Relay 3" value={value} onChange={() => setValue(!value)} />
      <ToggleSwitch className={styles.btn} label="Relay 4" value={value} onChange={() => setValue(!value)} />
      <Button variant='contained' className={styles.btn_last}>Turn off all appliances</Button>
    </div>
  )
}