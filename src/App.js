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
import LoadingCard from './components/LoadingCard/LoadingCard'

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

  const createLoadingCard = () => (
    <React.Fragment>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </React.Fragment>
  )

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Bitcoin Price Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{loading ? createLoadingCard() : null}</IonContent>
    </IonApp>
  )
}

export default App
