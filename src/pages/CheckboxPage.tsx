import { IonCheckbox, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const CheckboxPage: React.FC = () => {
  let characters: any = {};
  const checkBoxChange = (event: any) => {
    if (event.detail.value) {
      characters[event.detail.value] = event.detail.checked;
      console.log(JSON.stringify(characters, null, 2));
    }
  }
  return (
    <IonPage>
      <Header title="Checkbox" />
      <IonContent>
        <IonList>
          <IonListHeader>Characters</IonListHeader>
          <IonItem>
            <IonLabel>Jon Show</IonLabel>
            <IonCheckbox
              value="jon"
              color="primary"
              checked
              slot="start"
              onIonChange={(event) => checkBoxChange(event)}
            />
          </IonItem>
          <IonItem>
            <IonCheckbox
              value="daenerys"
              onIonChange={(event) => checkBoxChange(event)}
              color="dark"
              checked
              slot="start"
            />
            <IonLabel>Daenerys Targaryen</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox
              disabled
              slot="start"
            />
            <IonLabel>Arya Stark</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox
              value="tyrion"
              onIonChange={(event) => checkBoxChange(event)}
              color="secondary"
              slot="start"
            />
            <IonLabel>Tyrion Lannister</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox
              value="sansa"
              onIonChange={(event)=>checkBoxChange(event)}
              color="danger"
              checked
              slot="start"
            />
            <IonLabel>Sansa Stark</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox
              value="khal"
              onIonChange={(event)=>checkBoxChange(event)}
              color="primary"
              slot="start"
            />
            <IonLabel>Khal Drogo</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox
              value="cersei"
              onIonChange={(event)=>checkBoxChange(event)}
              color="tertiary"
              checked
              slot="start"
            />
            <IonLabel>Cersei Lannister</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox
              value="stannis"
              onIonChange={(event)=>checkBoxChange(event)}
              color="medium"
              checked
              slot="start"
            />
            <IonLabel>Stannis Baratheon</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="primary" disabled slot="start"/>
            <IonLabel>Petyr Baelish</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
