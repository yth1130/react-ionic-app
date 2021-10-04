import { ItemReorderEventDetail } from '@ionic/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonReorder, IonReorderGroup, IonTitle, IonToolbar } from '@ionic/react'
import { repeat } from 'ionicons/icons';
import React, { useRef, useState } from 'react'
import { Header } from '../components/Header'

export const ReorderPage: React.FC = () => {
  const [reorderState, setReorderState] = useState(true);
  const reorderAction = (event: CustomEvent<ItemReorderEventDetail>) => {
    // console.log(event);
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    event.detail.complete();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Reorder</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setReorderState(!reorderState)}>Toggle</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonListHeader>Reorder Icon</IonListHeader>
          <IonReorderGroup
            disabled = {reorderState}
            onIonItemReorder={(e) => reorderAction(e)}
          >
            <IonItem>
              <IonLabel>Item 1</IonLabel>
              <IonReorder slot="end" />
            </IonItem>
            <IonItem>
              <IonLabel>Item 2</IonLabel>
              <IonReorder slot="end" />
            </IonItem>
            <IonItem>
              <IonLabel>Item 3</IonLabel>
              <IonReorder slot="end" />
            </IonItem>
            <IonItem>
              <IonLabel>Item 4</IonLabel>
              <IonReorder slot="end" />
            </IonItem>

            <IonListHeader>Custom Reorder Icon</IonListHeader>
            <IonItem>
              <IonLabel>Item 5</IonLabel>
              <IonReorder slot="start">
                <IonIcon icon={repeat} />
              </IonReorder>
            </IonItem>
            <IonItem>
              <IonLabel>Item 6</IonLabel>
              <IonReorder slot="start">
                <IonIcon icon={repeat} />
              </IonReorder>
            </IonItem>
            <IonItem>
              <IonLabel>Item 7</IonLabel>
              <IonReorder slot="start">
                <IonIcon icon={repeat} />
              </IonReorder>
            </IonItem>

            <IonListHeader>Reorder Item</IonListHeader>
            <IonReorder>
              <IonItem>
                <IonLabel>Item 8</IonLabel>
              </IonItem>
            </IonReorder>
            <IonReorder>
              <IonItem>
                <IonLabel>Item 9</IonLabel>
              </IonItem>
            </IonReorder>
            <IonReorder>
              <IonItem>
                <IonLabel>Item 10</IonLabel>
              </IonItem>
            </IonReorder>

          </IonReorderGroup>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
