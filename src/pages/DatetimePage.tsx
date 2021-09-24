import { IonContent, IonDatetime, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const DatetimePage: React.FC = () => {
  const changeValue = (event:any) => {
    console.log("Change of value", event.detail);
  }
  return (
    <IonPage>
      <Header title="Datetime" />
      <IonContent>
        <IonList>
          <IonItem>
            <IonInput placeholder="Title"/>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Location" />
          </IonItem>
          <IonItemDivider />
          <IonItem>
            <IonLabel>Start Date</IonLabel>
            <IonDatetime
              onIonChange={(e) => changeValue(e)}
              value="1993-11-30"
              placeholder="Select Date"
            />
          </IonItem>
          <IonItem>
            <IonLabel>Start Time</IonLabel>
            <IonDatetime
              onIonChange={(e) => changeValue(e)}
              displayFormat="h:mm A"
              pickerFormat="h:mm A"
              value="1993-11-30T09:30Z"
            />
          </IonItem>
          <IonItem>
            <IonLabel>Ends</IonLabel>
            <IonDatetime
              onIonChange={(e) => changeValue(e)}
              value="1993-11-30"
              placeholder="Select Date"
            />
          </IonItem>
          <IonItem>
            <IonLabel>Repeat</IonLabel>
            <IonDatetime placeholder="Never" disabled/>
          </IonItem>
          <IonItem>
            <IonLabel>Travel Time</IonLabel>
            <IonDatetime placeholder="None" disabled/>
          </IonItem>
          <IonItemDivider />
          <IonItem>
            <IonLabel>Alert</IonLabel>
            <IonDatetime placeholder="None" disabled/>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
