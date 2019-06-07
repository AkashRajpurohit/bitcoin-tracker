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
    <div className="App">
      <h1>Bitcoin Tracker</h1>
    </div>
  )
}

export default App
