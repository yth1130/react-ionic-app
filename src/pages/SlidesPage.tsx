import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react'
import { arrowForward, menu } from 'ionicons/icons'
import React from 'react'

import './SlidesPage.css'

export const SlidesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Slides</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSlides pager={true}>
          <IonSlide>
            <img src="assets/img/slides/slide-1.png" alt="pict" />
            <h2>Welcome!</h2>
            The <b>Ionic UI App</b> is a practical preview of the ionic framework, and
            a demonstration of proper use (ahum!!) in svelte or even other languages. <br
            />
            <br />
            <br />
          </IonSlide>
          <IonSlide>
            <img src="assets/img/slides/slide-2.png" alt="pict" />
            <h2>What is Ionic?</h2>

            <b>Ionic Framework</b> is an open source SDK that enables developers to build
            high quality mobile apps with web technologies. <br />
            <br />
            <br />
          </IonSlide>
          <IonSlide>
            <img src="../assets/img/slides/slide-4.png" alt="pict" />
            <h2>Ready to Play?</h2>
            Check out
            <IonIcon icon={menu}/>
            to look at UI examples. <br />
            <IonButton fill="clear">
              Continue to tabs demo
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
            <br />
            <br />
            <br />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}
