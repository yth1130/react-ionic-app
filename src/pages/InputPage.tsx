import { InputChangeEventDetail } from '@ionic/core';
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonText, IonTextarea, useIonAlert } from '@ionic/react'
import React, { useState } from 'react'
import { Header } from '../components/Header'

export const InputPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showAlert] = useIonAlert();

  const changeValue = (event: CustomEvent<InputChangeEventDetail>) => {
    console.log("Change of value", event.detail);
  };

  const processForm = (event: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
    console.log("Processing form", event);
    showAlert({
      header: "Account Created",
      // subHeader: "Subtitle",
      message: `Created account for:<br/><b>${firstName} ${lastName}</b>`,
      buttons: ["OK"],
    })
  }
  
  return (
    <IonPage>
      <Header title="Create Account" />
      <IonContent>
        <form>
          <IonList lines="full" className="ion-no-margin ion-no-padding">
            <IonItem>
              <IonLabel position="stacked">
                First Name
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                onIonChange={(e) => setFirstName(e.detail.value as string)}
                required
                type="text"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">
                Last Name
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                onIonChange={(e) => setLastName(e.detail.value as string)}
                required
                type="text"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput onIonChange={(e) => changeValue(e)}/>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Address</IonLabel>
              <IonInput
                placeholder="Address Line 1"
                onIonChange={(e) => changeValue(e)}
              />
              <IonInput
                placeholder="Address Line 2"
                onIonChange={(e) => changeValue(e)}
              />
              <IonInput placeholder="City" onIonChange={(e) => changeValue(e)}/>
              <IonInput placeholder="State" onIonChange={(e) => changeValue(e)}/>
              <IonInput
                placeholder="Zip Code"
                onIonChange={(e) => changeValue(e)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Notes</IonLabel>
              <IonTextarea onIonChange={(e) => changeValue(e)}/>
            </IonItem>

            <div className="ion-padding">
              <IonButton expand="block" onClick={(e) => processForm(e)} className="ion-no-margin">
                Create account
              </IonButton>
            </div>

          </IonList>
        </form>
      </IonContent>
    </IonPage>
  )
}
