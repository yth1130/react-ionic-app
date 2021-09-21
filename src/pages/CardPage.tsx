import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonPage } from '@ionic/react'
import { pin, walk, warning, wifi, wine } from 'ionicons/icons'
import React from 'react'
import { Header } from '../components/Header'

export const CardPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Card" />
      <IonContent>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and
            climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start"></IonIcon>
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>
          <IonCardContent>
            This is content, without any paragraph or header tags, within an
            ion-card-content element.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="/tabs" class="activated">
            <IonIcon icon={wifi} slot="start"/>
            <IonLabel>Card Ling Item 1 .activated</IonLabel>
          </IonItem>
          <IonItem href="/button">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 .activated</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <img src="assets/img/madison.jpg" alt="madison" />
          <IonCardHeader>
            <IonCardSubtitle>Destination</IonCardSubtitle>
            <IonCardTitle>Madison, WI</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
            Madison was named the capital of the Wisconsin Territory in 1836.
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  )
}
