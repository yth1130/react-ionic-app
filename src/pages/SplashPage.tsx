import { createAnimation, IonContent, IonPage, useIonViewDidEnter } from '@ionic/react'
import React, { useRef } from 'react'
import { Header } from '../components/Header'

//https://www.google.com/search?q=ionic+react+hide+menu&oq=ionic+react+hide+menu&aqs=chrome..69i57.3383j0j7&sourceid=chrome&ie=UTF-8
//https://forum.ionicframework.com/t/ionic-rect-disable-side-menu-on-login-and-register-page/190015/2
export const SplashPage: React.FC = () => {
  const animRef = useRef<HTMLImageElement>(null);
  
  useIonViewDidEnter(() => {
    console.log("haha");
    if (animRef.current !== null) {
      const anim = createAnimation()
        .addElement(animRef.current)
        .duration(1900)
        // .fromTo("transform", "translateY(0) rotate(0)")
        // .fromTo()
        // .easing("ease-out");
        .keyframes([
          { offset: 0.0, transform: "rotate(0) scale(1)"}, //, color: "#000" },
          { offset: 0.5, transform: "rotate(360deg) scale(0.1)"}, //, color: "#000" },
          { offset: 1.0, transform: "rotate(0) scale(1)"}, //, color: "#000" },
        ]);

      anim.play();
      console.log("hoho");
    }
  });
  return (
    <IonPage>
      <Header title="Ionic Companion" />

      <IonContent>
        <br/>
        <br/>
        <br/>
        <div className="ion-text-center">
          <img
            ref={animRef}
            src="/assets/img/great-success.png"
            alt="Great success"
            // in:scale="{{ duration: 1900, easing: elasticInOut }}"
          />
        </div>
      </IonContent>
    </IonPage>
  )
}
