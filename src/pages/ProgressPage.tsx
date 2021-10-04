import { IonContent, IonLabel, IonList, IonListHeader, IonPage, IonProgressBar } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const ProgressPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Progress Bar" />
      <IonContent>
        <IonList>
          <IonListHeader>Default</IonListHeader>
          <IonProgressBar />
        </IonList>

        <IonList>
          <IonListHeader>Default at 50%</IonListHeader>
          <IonProgressBar value={0.5}/>
        </IonList>

        <IonList>
          <IonListHeader>Colorized</IonListHeader>
          <IonProgressBar color="primary" value={0.1} /> <br/>
          <IonProgressBar color="secondary" value={0.2} /> <br/>
          <IonProgressBar color="tertiary" value={0.3} />
        </IonList>

        <IonList>
          <IonListHeader>Indeterminate</IonListHeader>
          <IonProgressBar type="indeterminate" />
          <IonListHeader>Indeterminate (reversed)</IonListHeader>
          <IonProgressBar type="indeterminate" reversed/>
          <IonListHeader>Buffer</IonListHeader>
          <IonProgressBar value={0.25} buffer={0.5} />
        </IonList>
      </IonContent>
    </IonPage>
  )
}
