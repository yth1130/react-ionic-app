import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const InfiniteScrollPage: React.FC = () => {
  console.log("HI 1");
  return (
    <IonPage>
      <Header title="Infinite Scroll"/>
      <IonContent>

      </IonContent>
    </IonPage>
  )
}
