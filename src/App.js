import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { getBitcoinPrice } from './api/Bitcoin'
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [bitcoinInfo, setBitcoinInfo] = useState({})

  useEffect(() => {
    const getInfo = async () => {
      const bitcoinData = await getBitcoinPrice()
      setBitcoinInfo(bitcoinData)
      setLoading(false)
    }
    getInfo()
  }, [])
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Bitcoin Price Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{JSON.stringify(bitcoinInfo)}</IonContent>
    </IonApp>
  )
}

export default App
