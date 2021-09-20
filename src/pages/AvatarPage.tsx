import { createAnimation, IonAvatar, IonCard, IonChip, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonText } from '@ionic/react';
import React, { useRef } from 'react'
import { Header } from '../components/Header';

export const AvatarPage: React.FC = () => {
  const animRef = useRef(null);
  const playAnim = () => {
    if (animRef.current === null)
      return;

    // https://eliteionic.com/tutorials/using-create-animation-wrappper-component-ionic-react-application/
    const anim = createAnimation()
      .addElement(animRef.current)
      .duration(7000)
      // .fromTo("transform", "translateY(0) rotate(0)")
      // .fromTo()
      // .easing();
      .keyframes([
        { offset: 0.0, transform: "rotate(0) scale(1)"}, //, color: "#000" },
        { offset: 0.5, transform: "rotate(360deg) scale(0.1)"}, //, color: "#000" },
        { offset: 1.0, transform: "rotate(0) scale(1)"}, //, color: "#000" },
      ]);

    anim.play();
  };

  return (
    <IonPage>
      <Header title="Avatar"/>
      <IonContent>
        {/* <IonList> */}
          <IonListHeader>Default</IonListHeader>
          <IonAvatar>
            <img alt="avatar" src="assets/img/avatar.svg" />
          </IonAvatar>
        {/* </IonList> */}

        {/* <IonList> */}
          <IonListHeader>Chip!</IonListHeader>
          <IonChip>
            <IonAvatar>
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>Kit bishop</IonLabel>
          </IonChip>
        {/* </IonList> */}

        <IonList>
          <IonListHeader>Item Avatars</IonListHeader>
          <IonItem>
            <IonAvatar slot="start">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>Lorem ipsum</IonLabel>
          </IonItem>
          <IonItem ref={animRef} onClick={() => playAnim()}>
            <IonAvatar slot="end">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>Click me!</h3>
              <p>Click this item to launch the WEB Animation API</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="end">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>Lorem ipsum</h3>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="end">
              <img alt="avatar" src="assets/img/avatar.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>Lorem ipsum</h3>
            <p>dolor sit amet</p>
            </IonLabel>
          </IonItem>
        </IonList>

        <br />

        <IonCard>
          <IonList> {
            avatars.map(avatar => (
              <IonItem key={avatar.name} lines="none">
                <IonAvatar>
                  <img alt={avatar.name} src={avatar.src} />
                </IonAvatar>
                <IonText>{avatar.name}</IonText>
              </IonItem>
            ))
          }
          </IonList>
        </IonCard>
        Scroll me vertically (not implemented correctly) <br /> Courtesy : https://github.com/thenaim/ionic-tk-social-network
        <br /> https://s3.amazonaws.com/uifaces/faces/twitter/yayteejay/128.jpg
      </IonContent>
    </IonPage>
  );
}


const avatars = [
  { name: "Ben",  src: "assets/img/avatars/avatar-ben.png" },
  { name: "Finn", src: "assets/img/avatars/avatar-finn.png" },
  { name: "Leia", src: "assets/img/avatars/avatar-leia.png" },
  { name: "Rey",  src: "assets/img/avatars/avatar-rey.png" },
  { name: "Yoda", src: "assets/img/avatars/avatar-yoda.png" },
  { name: "Poe",  src: "assets/img/avatars/avatar-poe.png" },
  { name: "Han",  src: "assets/img/avatars/avatar-han.png" },
  { name: "Luke", src: "assets/img/avatars/avatar-luke.png" },
];