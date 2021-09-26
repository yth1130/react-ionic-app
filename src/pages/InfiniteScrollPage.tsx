import { IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const InfiniteScrollPage: React.FC = () => {
  return (
    <IonPage>
      {/* <Header title="Infinite Scroll"/> */}
      <Header title="Accounts - Scroll down to see it work!"/>
      <IonContent>
        <IonList />
        <IonInfiniteScroll
          onIonInfinite={() =>{}}
          threshold="100px"
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )
}
