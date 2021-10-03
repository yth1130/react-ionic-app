import { IonContent, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonNote, IonPage } from '@ionic/react'
import { logoIonic } from 'ionicons/icons'
import React from 'react'
import { Header } from '../components/Header'

export const ItemPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Item" />
      <IonContent className="ion-padding">
        <IonList>
          <IonListHeader>Items with Labels</IonListHeader>
          <IonItem className="grey-item">
            <IonLabel>Label</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon slot="end" icon={logoIonic} />
            <IonLabel>Label with Icon</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>Color Items</IonListHeader>
          <IonItem color="primary">
            <IonLabel>Primary</IonLabel>
          </IonItem>
          <IonItem color="secondary">
            <IonLabel>Secondary</IonLabel>
          </IonItem>
          <IonItem color="tertiary">
            <IonLabel>Tertiary</IonLabel>
          </IonItem>
          <IonItem color="success">
            <IonLabel>Success</IonLabel>
          </IonItem>
          <IonItem color="warning">
            <IonLabel>Warning</IonLabel>
          </IonItem>
          <IonItem color="danger">
            <IonLabel>Danger</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>Group with Divider</IonListHeader>
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>A</IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonLabel>Adam</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Alan</IonLabel>
            </IonItem>
            <IonItemDivider>
              <IonLabel>B</IonLabel>
            </IonItemDivider>
            <IonItem lines="none">
              <IonLabel>Brianna</IonLabel>
            </IonItem>
            <IonItemDivider>
              <IonLabel>C</IonLabel>
            </IonItemDivider>
            <IonItem lines="none">
              <IonLabel>Carla</IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList>

        <IonList>
          <IonListHeader>Sliding Item</IonListHeader>
          <IonItemSliding>
            <IonItem color="#fff" style={styles.slindingItem}>
              <IonLabel>New Message</IonLabel>
            </IonItem>
            <IonItemOptions side="start">
              <IonItemOption color="primary">Mark Unread</IonItemOption>
            </IonItemOptions>
            <IonItemOptions side="end">
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem>
              <IonLabel>New Message</IonLabel>
            </IonItem>
            <IonItemOptions side="start">
              <IonItemOption color="primary">Mark Unread</IonItemOption>
            </IonItemOptions>
            <IonItemOptions side="end">
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>

        <IonList>
          <IonListHeader>Notes</IonListHeader>
          <IonItem>
            <IonLabel>Primary Note</IonLabel>
            <IonNote slot="end" color="primary">99</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>Secondary Note</IonLabel>
            <IonNote slot="end" color="secondary">99</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>Tertiary Note</IonLabel>
            <IonNote slot="end" color="tertiary">99</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>Success Note</IonLabel>
            <IonNote slot="end" color="success">99</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>Warning Note</IonLabel>
            <IonNote slot="end" color="warning">99</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>danger Note</IonLabel>
            <IonNote slot="end" color="danger">99</IonNote>
          </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  )
}

const styles = {
  slindingItem: {
    backgroundColor: "blue"
    // background: "blue",
    // color: "blue",
  },
}