import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonPage } from '@ionic/react'
import { add, caretBack, caretForward, caretUp, logoFacebook, logoGoogle, logoTwitch, logoTwitter, logoVimeo, share } from 'ionicons/icons'
import React from 'react'
import { Header } from '../components/Header'

export const FabPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Fab" />
      {/* <IonContent fullscreen class="ion-padding"> */}
      <IonContent>

        <IonFab edge horizontal="end" vertical="top" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList>
            <IonFabButton color="light">
              <IonIcon icon={logoFacebook} />
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoVimeo} />
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonFab horizontal="end" vertical="center" slot="fixed">
          <IonFabButton color="danger">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/* 안보임? */}
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton color="light">
            <IonIcon icon={caretBack} />
          </IonFabButton>
        </IonFab>

        <IonFab horizontal="start" vertical="bottom" slot="fixed">
          <IonFabButton color="dark">
            <IonIcon icon={caretUp} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton color="light">
              <IonIcon icon={logoFacebook} />
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoVimeo} />
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoGoogle} />
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonFab horizontal="start" vertical="top" slot="fixed">
          <IonFabButton color="secondary">
            <IonIcon icon={caretForward} />
          </IonFabButton>
          <IonFabList side="end">
            <IonFabButton color="light">
              <IonIcon icon={logoFacebook} />
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoVimeo} />
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoGoogle} />
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonFab horizontal="center" vertical="center" slot="fixed">
          <IonFabButton color="light">
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton color="primary">
              <IonIcon icon={logoVimeo} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton color="dark">
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton color="secondary">
              <IonIcon icon={logoFacebook} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton color="light">
              <IonIcon icon={logoGoogle} />
            </IonFabButton>
          </IonFabList>
        </IonFab>

      </IonContent>
    </IonPage>
  )
}
