import { IonButton, IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

import './ButtonPage.css';

export const ButtonPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Button" />
      <IonContent>
        <section>
          <header>Small Size</header>
          <IonButton size="small">Default</IonButton>
          <IonButton size="small" color="secondary">Secondary</IonButton>
          <IonButton size="small" color="tertiary">Tertiary</IonButton>
        </section>
        <section>
          <header>Default Size</header>
          <IonButton color="success">Success</IonButton>
          <IonButton color="warning">Warning</IonButton>
          <IonButton color="danger">Danger</IonButton>
        </section>
        <section>
          <header>Large Size</header>
          <IonButton size="large" color="light">Light</IonButton>
          <IonButton size="large" color="medium">Medium</IonButton>
          <IonButton size="large" color="dark">Dark</IonButton>
        </section>
        <section>
          <header>Block Width</header>
          <IonButton expand="block">A block button</IonButton>
        </section>
        <section className="full-width">
          <header>Full WIdth</header>
          <IonButton expand="full" color="secondary">A full-width button</IonButton>
        </section>
      </IonContent>
    </IonPage>
  )
}
