import { IonContent, IonItem, IonLabel, IonList, IonPage, IonSpinner } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const SpinnerPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Spinner" />
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Default</IonLabel>
            <IonSpinner />
          </IonItem>
          <IonItem>
            <IonLabel>Lines</IonLabel>
            <IonSpinner name="lines" />
          </IonItem>
          <IonItem>
            <IonLabel>Lines Small</IonLabel>
            <IonSpinner name="lines-small" />
          </IonItem>
          <IonItem>
            <IonLabel>Dots</IonLabel>
            <IonSpinner name="dots" />
          </IonItem>
          <IonItem>
            <IonLabel>Bubbels</IonLabel>
            <IonSpinner name="bubbles" />
          </IonItem>
          <IonItem>
            <IonLabel>Circles</IonLabel>
            <IonSpinner name="circles" />
          </IonItem>
          <IonItem>
            <IonLabel>Crescent</IonLabel>
            <IonSpinner name="crescent" />
          </IonItem>
          <IonItem>
            <IonLabel>Paused</IonLabel>
            <IonSpinner paused />
          </IonItem>
          <IonItem>
            <IonLabel>Primary</IonLabel>
            <IonSpinner color="primary" />
          </IonItem>
          <IonItem>
            <IonLabel>Secondary</IonLabel>
            <IonSpinner color="secondary" />
          </IonItem>
          <IonItem>
            <IonLabel>Tertiary</IonLabel>
            <IonSpinner color="tertiary" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
