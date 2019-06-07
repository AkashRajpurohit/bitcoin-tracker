import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react'
import React from 'react'
import './BitcoinCard.css'

const BitcoinCard = props => (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>{props.data.code}</IonCardSubtitle>
      <IonCardTitle>{props.data.rate_float}</IonCardTitle>
    </IonCardHeader>
  </IonCard>
)

export default BitcoinCard
