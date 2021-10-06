import { IonContent, IonIcon, IonLabel, IonListHeader, IonPage, IonSegment, IonSegmentButton } from '@ionic/react'
import { call, heart, pin } from 'ionicons/icons'
import React from 'react'
import { Header } from '../components/Header'

export const SegmentPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Segment" />
      <IonContent>
        <IonListHeader>Default</IonListHeader>

        <IonSegment
          value="call"
          onIonChange={() => {}}
        >
          <IonSegmentButton value="call">
            <IonLabel>Call</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="favorite">
            <IonLabel>Favorite</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="map">
            <IonLabel>Map</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <IonSegment
          value="heart"
          color="secondary"
          onIonChange={() => {}}
        >
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonIcon icon={pin} />
          </IonSegmentButton>
        </IonSegment>

        <IonSegment
          value="favorite"
          color="tertiary"
          onIonChange={() => {}}
        >
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
            <IonLabel>Call</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="favorite">
            <IonIcon icon={heart} />
            <IonLabel>Favorite</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="map">
            <IonIcon icon={pin} />
            <IonLabel>Map</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <IonSegment
          value="call"
          color="success"
          onIonChange={() => {}}
        >
          <IonSegmentButton value="call">
            <IonLabel>Call</IonLabel>
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="favorite">
            <IonLabel>Favorite</IonLabel>
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="map">
            <IonLabel>Map</IonLabel>
            <IonIcon icon={pin} />
          </IonSegmentButton>
        </IonSegment>

        <IonListHeader>Scrollable</IonListHeader>

        <IonSegment
          value="call"
          color="warning"
          onIonChange={() => {}}
          scrollable
        >
          <IonSegmentButton value="call" layout="icon-start">
            <IonLabel>Call</IonLabel>
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="favorite" layout="icon-start">
            <IonLabel>Favorite</IonLabel>
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="map" layout="icon-start">
            <IonLabel>Map</IonLabel>
            <IonIcon icon={pin} />
          </IonSegmentButton>
        </IonSegment>

        <IonSegment
          value="call"
          color="danger"
          onIonChange={() => {}}
          scrollable
        >
          <IonSegmentButton value="call" layout="icon-end">
            <IonLabel>Call</IonLabel>
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="favorite" layout="icon-end">
            <IonLabel>Favorite</IonLabel>
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="map" layout="icon-end">
            <IonLabel>Map</IonLabel>
            <IonIcon icon={pin} />
          </IonSegmentButton>
        </IonSegment>

      </IonContent>
    </IonPage>
  )
}
