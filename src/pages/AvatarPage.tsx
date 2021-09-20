import { IonAvatar, IonChip, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPage } from '@ionic/react';
import React from 'react'
import { Header } from '../components/Header';

export const AvatarPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Avatar"/>
      <IonContent>
        {/* <IonList> */}
          <IonListHeader>Default</IonListHeader>
          <IonAvatar>
            <img alt="avatar" src="assets/img/avatar.svg" />
          </IonAvatar>
        {/* </IonList> */}

        {/* <IonList> */}
          <IonListHeader>Chip!</IonListHeader>
          <IonChip>
            <IonAvatar>
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>Kit bishop</IonLabel>
          </IonChip>
        {/* </IonList> */}

        <IonList>
          <IonListHeader>Item Avatars</IonListHeader>
          <IonItem>
            <IonAvatar slot="start">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>Lorem ipsum</IonLabel>
          </IonItem>
          <IonItem onClick={() => {}}>
            <IonAvatar slot="end">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>Click me!</h3>
              <p>Click this item to launch the WEB Animation API</p>
            </IonLabel>
          </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
}
