import { IonContent, IonItem, IonLabel, IonList, IonPage, IonToggle } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const TogglePage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Toggle" />
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Blueberry</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="blueberry"
              checked
            />
          </IonItem>
          
          <IonItem>
            <IonLabel>Apple</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="apple"
              color="secondary"
              checked
            />
          </IonItem>

          <IonItem>
            <IonLabel>Grape</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="grape"
              color="tertiary"
              checked
            />
          </IonItem>

          <IonItem>
            <IonLabel>Kiwi</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="kiwi"
              color="success"
              checked
            />
          </IonItem>

          <IonItem>
            <IonLabel>Orange</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="orrange"
              color="warning"
              checked
            />
          </IonItem>

          <IonItem>
            <IonLabel>Cherry</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="cherry"
              color="danger"
              checked
            />
          </IonItem>

          <IonItem>
            <IonLabel>Banana</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="banana"
              color="light"
              checked
            />
          </IonItem>

          <IonItem>
            <IonLabel>Cantaloupe</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="cantaloupe"
              color="medium"
              checked
            />
          </IonItem>

          <IonItem>
            <IonLabel>Blackberry</IonLabel>
            <IonToggle 
              onIonChange={() => {}}
              slot="start"
              name="blackberry"
              color="dark"
              checked
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
