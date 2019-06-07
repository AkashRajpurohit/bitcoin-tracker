import { IonApp, IonContent, IonIcon } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { getBitcoinPrice } from './api/Bitcoin'
import './App.css'
import BitcoinCard from './components/BitcoinCard/BitcoinCard'
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
      <IonContent>
        <section className="bitcoin__header">
          <IonIcon name="logo-bitcoin" style={logoStyles} />
        </section>
        {loading
          ? createLoadingCard()
          : Object.keys(bitcoinInfo.bpi).map(x => (
              <BitcoinCard
                key={bitcoinInfo.bpi[x].code}
                data={bitcoinInfo.bpi[x]}
              />
            ))}
        <section className="bitcoin__desclaimer">
          <p>{bitcoinInfo.disclaimer}</p>
        </section>
      </IonContent>
    </IonApp>
  )
}

const logoStyles = {
  width: '140px',
  height: '140px',
  display: 'block',
  margin: '0 auto',
  color: 'white',
}

export default App
