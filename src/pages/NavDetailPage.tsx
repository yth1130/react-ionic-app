import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useLocation } from 'react-router';
import { Header } from '../components/Header'
import * as Icons from 'ionicons/icons'

export const NavDetailPage: React.FC = () => {
  const location = useLocation();
  const props = (location.state as any);
  if (props === undefined)
    return <IonPage />;
  const tech = props.tech;
  
  console.log(props);
  return (
    <IonPage>
      {/* <Header title={tech.title} /> */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{tech.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {//@ts-ignore
        <IonIcon icon={Icons[tech.icon]} style={{color: tech.color}} size="large"/>
        }
        <p>{tech.description}</p>
      </IonContent>
    </IonPage>
  )
}
