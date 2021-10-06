import { IonButton, IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

export const SkeletonPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Skeleton Text</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={() => {}}>Toggle</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  )
}
