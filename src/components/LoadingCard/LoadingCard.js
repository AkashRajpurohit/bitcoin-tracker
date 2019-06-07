import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSkeletonText,
} from '@ionic/react'
import React from 'react'

const LoadingCard = () => (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>
        <IonSkeletonText animated className="loading-card__currency-name" />
      </IonCardSubtitle>
      <IonCardTitle>
        <IonSkeletonText animated className="loading-card__currency-value" />
      </IonCardTitle>
    </IonCardHeader>
  </IonCard>
)

export default LoadingCard
