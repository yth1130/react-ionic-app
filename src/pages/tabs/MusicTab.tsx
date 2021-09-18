import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../../components/Header'

export const MusicTab: React.FC = () => {
  return (
    <IonPage>
      <Header title="Music"/>
      <IonContent>
        music
      </IonContent>
    </IonPage>
    // <IonPage>
    //   <IonContent>
    //     Music
    //   </IonContent>
    // </IonPage>
  )
}
