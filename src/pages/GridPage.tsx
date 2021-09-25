import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

import './GridPage.css'

export const GridPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Grid" />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div>1 of 2</div>
            </IonCol>
            <IonCol>
              <div>2 of 2</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 3</div>
            </IonCol>
            <IonCol>
              <div>2 of 3</div>
            </IonCol>
            <IonCol>
              <div>3 of 3</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 3</div>
            </IonCol>
            <IonCol>
              <div>2 of 3</div>
            </IonCol>
            <IonCol>
              <div>3 of 3</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 3</div>
            </IonCol>
            <IonCol>
              <div>2 of 3</div>
            </IonCol>
            <IonCol>
              <div>3 of 3</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offset="4">
              <div>1 of 2</div>
            </IonCol>
            <IonCol>
              <div>2 of 2</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 2</div>
            </IonCol>
            <IonCol offset="4">
              <div>2 of 2</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 4</div>
            </IonCol>
            <IonCol>
              <div>2 of 4</div>
            </IonCol>
            <IonCol>
              <div>3 of 4</div>
            </IonCol>
            <IonCol>
              <div>4 of 4</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
