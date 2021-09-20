import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon } from '@ionic/react'
import { logoTux } from 'ionicons/icons';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

export const GamesTabDetailPage: React.FC = () => {
  const location = useLocation();
  const props = (location.state as any);
  if (props === undefined)
    return <IonPage />;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{props.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        <IonIcon icon={props.icon} color={props.color} size="large"/>
        <p>{props.description}</p>
      </IonContent>
    </IonPage>
  )
}
  