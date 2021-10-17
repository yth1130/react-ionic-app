import { IonChip, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonThumbnail } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const ThumbnailsPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Thumbnails" />
      <IonContent>
        <IonListHeader>Default</IonListHeader>
        <IonThumbnail className="ion-margin-start">
          <img alt="avatar" src="assets/img/avatar.svg" />
        </IonThumbnail>

        <IonListHeader>Chip Avatar</IonListHeader>
        <IonChip>
          <IonThumbnail className="ion-margin-start">
            <img alt="avatar" src="assets/img/avatar.svg" />
          </IonThumbnail>
          <IonLabel>Kit Bishop</IonLabel>
        </IonChip>

        <IonList>
          <IonListHeader>Item Avatars</IonListHeader>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonThumbnail>
            <IonLabel>Lorem ipsum</IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonThumbnail>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonThumbnail>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonThumbnail>
            <IonLabel>Lorem ipsum</IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonThumbnail>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonThumbnail>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
