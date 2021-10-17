import { IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const TextPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Text" />
      <IonContent fullscreen class="ion-padding">
        <IonText color="primary">
          <h1 style={{marginTop:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        </IonText>

        <IonText color="secondary">
          <h2>Nam rutrum justo massa, maximus elementum leo dignissim ac.</h2>
        </IonText>

        <IonText color="tertiary">
          <h3>Vestibulum eleifend lorem nec neque interdum varius.</h3>
        </IonText>

        <IonText color="success">
          <h4>Sed in neque at nibh congue tincidunt.</h4>
        </IonText>

        <IonText color="warning">
          <h5>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae;
          </h5>
        </IonText>
        
        <IonText color="danger">
          <h6>Suspendisse potenti.</h6>
        </IonText>

        <p>
          Donec magna odio,
          <IonText color="primary">semper</IonText>
          ac nibh et, vestibulum eleifend felis. Donec
          <IonText color="secondary">pulvinar</IonText>
          ex non quam vulputate malesuada in a magna. Praesent massa arcu,
          <IonText color="tertiary">vehicula</IonText>
          id pharetra et, cursus at lectus.
        </p>
      </IonContent>
    </IonPage>
  )
}
