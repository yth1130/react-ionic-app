import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../../components/Header'

export const GamesTab: React.FC = () => {
  return (
    <IonPage>
      <Header title="Games"/>
      <IonContent>
        games
      </IonContent>
    </IonPage>
  )
}
