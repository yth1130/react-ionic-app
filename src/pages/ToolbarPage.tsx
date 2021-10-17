import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { fingerPrint, logoIonic, star } from 'ionicons/icons'
import React from 'react'

export const ToolbarPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Header</IonTitle>
          <IonButtons slot="end">
            <IonButton><IonIcon slot="icon-only" icon={logoIonic}/></IonButton>
            <IonButton><IonIcon slot="icon-only" icon={star}/></IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle>Default</IonTitle>
        </IonToolbar>
        <IonToolbar color="primary">
          <IonTitle>Default</IonTitle>
        </IonToolbar>
        <IonToolbar color="secondary">
          <IonTitle>Secondary</IonTitle>
        </IonToolbar>
        <IonToolbar color="tertiary">
          <IonTitle>Tertiary</IonTitle>
        </IonToolbar>
        <IonToolbar color="success">
          <IonTitle>Success</IonTitle>
        </IonToolbar>
        <IonToolbar color="warning">
          <IonTitle>Warning</IonTitle>
        </IonToolbar>
        <IonToolbar color="danger">
          <IonTitle>Danger</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>Buttons</IonTitle>
          <IonButtons slot="end">
            <IonButton>Messages (1)</IonButton>
            <IonButton>Log Out</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonContent>

      <IonFooter>
          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton>
                <IonIcon slot="icon-only" icon={fingerPrint} />
              </IonButton>
            </IonButtons>
            <IonTitle>Footer</IonTitle>
            <IonButtons slot="primary">
              <IonButton>
                <IonIcon slot="icon-only" icon={fingerPrint} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
    </IonPage>
  )
}
