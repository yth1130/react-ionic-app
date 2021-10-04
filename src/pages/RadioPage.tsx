import { RadioGroupChangeEventDetail } from '@ionic/core'
import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonRadioGroup } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const RadioPage: React.FC = () => {
  const radioChange = (event: CustomEvent<RadioGroupChangeEventDetail<any>>) => {
    console.log(event.detail.value);
    // console.log(event.detail);
    // console.log(event);
  }

  return (
    <IonPage>
      <Header title="Radio" />
      <IonContent>
        <IonList>
          <IonRadioGroup onIonChange={(e) => radioChange(e)}>
            <IonListHeader>Fruit</IonListHeader>
            <IonItem>
              <IonLabel>Apple</IonLabel>
              <IonRadio slot="start" color="success" value="apple"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Grape</IonLabel>
              <IonRadio slot="start" color="tertiary" value="grape"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Cherry</IonLabel>
              <IonRadio slot="start" color="danger" value="cherry"></IonRadio>
            </IonItem>
          </IonRadioGroup>

          <IonRadioGroup allowEmptySelection onIonChange={(e) => radioChange(e)}>
            <IonListHeader>PizzaTopping</IonListHeader>
            <IonItem>
              <IonLabel>Beef</IonLabel>
              <IonRadio slot="end" color="primary" />
            </IonItem>
            <IonItem>
              <IonLabel>Anchovies</IonLabel>
              <IonRadio slot="end" color="secondary" defaultChecked/>
            </IonItem>
            <IonItem>
              <IonLabel>Sausage</IonLabel>
              <IonRadio slot="end" color="tertiary" name="sausage" />
            </IonItem>
            <IonItem>
              <IonLabel>Bellpepper</IonLabel>
              <IonRadio slot="end" color="success" name="tomato" />
            </IonItem>
            <IonItem>
              <IonLabel>Tomato</IonLabel>
              <IonRadio slot="end" color="warning" name="carrot" />
            </IonItem>
            <IonItem>
              <IonLabel>Pepperoni</IonLabel>
              <IonRadio slot="end" color="danger" defaultChecked />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
