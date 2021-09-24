import { IonAvatar, IonChip, IonContent, IonIcon, IonLabel, IonListHeader, IonPage } from '@ionic/react'
import { checkmarkCircle, closeCircle, pin, restaurant, videocam, wine } from 'ionicons/icons'
import React from 'react'
import { Header } from '../components/Header'

export const ChipPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Chip"/>
      <IonContent>
        <IonListHeader>Basic</IonListHeader>
        <p>
          <IonChip>
            <IonLabel>Default</IonLabel>
          </IonChip>
          <IonChip>
            <IonIcon icon={checkmarkCircle} />
            <IonLabel>Icon</IonLabel>
          </IonChip>
          <IonChip>
            <IonAvatar>
              <img
                alt="avatar"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjYzVkYmZmIiBkPSJNMCAwaDUxMnY1MTJIMHoiLz48cGF0aCBkPSJNMjU2IDMwNGM2MS42IDAgMTEyLTUwLjQgMTEyLTExMlMzMTcuNiA4MCAyNTYgODBzLTExMiA1MC40LTExMiAxMTIgNTAuNCAxMTIgMTEyIDExMnptMCA0MGMtNzQuMiAwLTIyNCAzNy44LTIyNCAxMTJ2NTZoNDQ4di01NmMwLTc0LjItMTQ5LjgtMTEyLTIyNC0xMTJ6IiBmaWxsPSIjODJhZWZmIi8+PC9zdmc+"
              />
            </IonAvatar>
            <IonLabel>Avatar</IonLabel>
          </IonChip>
        </p>
        <IonListHeader>Colors</IonListHeader>
        <p>
          <IonChip color="primary">
            <IonLabel>Primary</IonLabel>
          </IonChip>
          <IonChip color="secondary">
            <IonLabel>Secondary</IonLabel>
          </IonChip>
          <IonChip color="tertiary">
            <IonLabel>Tertiary</IonLabel>
          </IonChip>
          <IonChip color="success">
            <IonLabel>Success</IonLabel>
          </IonChip>
          <IonChip color="warning">
            <IonLabel>Warning</IonLabel>
          </IonChip>
          <IonChip color="danger">
            <IonLabel>Danger</IonLabel>
          </IonChip>
        </p>

        <IonListHeader>Outline</IonListHeader>
        <p>
          <IonChip outline color="primary">
            <IonLabel>Primary</IonLabel>
          </IonChip>
          <IonChip outline color="secondary">
            <IonLabel>Secondary</IonLabel>
          </IonChip>
          <IonChip outline color="tertiary">
            <IonLabel>Tertiary</IonLabel>
          </IonChip>
          <IonChip outline color="success">
            <IonLabel>Success</IonLabel>
          </IonChip>
          <IonChip outline color="warning">
            <IonLabel>Warning</IonLabel>
          </IonChip>
          <IonChip outline color="danger">
            <IonLabel>Danger</IonLabel>
          </IonChip>
        </p>

        <IonListHeader>Icons</IonListHeader>
        <p>
          <IonChip outline color="primary">
            <IonIcon icon={pin} />
            <IonLabel>Madison</IonLabel>
            <IonIcon icon={closeCircle}/>
          </IonChip>
          <IonChip outline color="secondary">
            <IonIcon icon={wine} />
            <IonLabel>Nightlife</IonLabel>
            <IonIcon icon={closeCircle}/>
          </IonChip>
          <IonChip outline color="tertiary">
            <IonIcon icon={restaurant} />
            <IonLabel>Dining</IonLabel>
            <IonIcon icon={closeCircle}/>
          </IonChip>
          <IonChip outline color="dark">
            <IonIcon icon={videocam} />
            <IonLabel>Entertainment</IonLabel>
            <IonIcon icon={closeCircle}/>
          </IonChip>
        </p>
      </IonContent>
    </IonPage>
  )
}
