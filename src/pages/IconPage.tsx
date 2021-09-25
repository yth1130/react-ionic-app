import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonToast, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react'
import React, { useEffect, useRef, useState } from 'react'
import * as Icons from 'ionicons/icons'

export const IconPage: React.FC = () => {
  const searchbar = useRef(null);

  let totalIcons: any;
  // let icons: any;
  const [icons, setIcons] = useState<any>([]);
  const [showToast] = useIonToast();

  // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  const capitalizeFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  //ex) add-circle-outline -> addCircleOutline
  const convertIconNames = (names: string[]) => {
    return names.map(name => {
      let result: string;
      const splitParts = name.split('-');
      
      result = splitParts[0];
      for (let index = 1; index < splitParts.length; index++) {
        result += capitalizeFirstLetter(splitParts[index]);
      }
      
      return result;
    });
  }

  const onClickIcon = (icon: string) => {
    showToast({
      color: "light",
      duration: 2000,
      // message: `<ion-icon style="font-size:350%" name="${icon}"></ion-icon> - ${icon}`,
      message: `${icon}`,
      buttons: [
        {
          side: "start",
          //@ts-ignore
          icon: Icons[icon] as any,
          // text: "hoho",
          // role: "cancel",
        }
      ],
    });
  }

  // useIonViewDidEnter(() => {
  //   console.log('ionViewDidEnter event fired');
  // });

  // useIonViewDidLeave(() => {
  //   console.log('ionViewDidLeave event fired');
  // });

  // useIonViewWillEnter(() => {
  //   console.log('ionViewWillEnter event fired');
  // });

  // useIonViewWillLeave(() => {
  //   console.log('ionViewWillLeave event fired');
  // });

  useEffect(() => {
    fetch('assets/data/ionicons.json').then(async res => {
      const data = await res.json();
      // console.log("List of icons", data);
      // console.log(typeof(data)); // object
      totalIcons = data.icons;
      // console.log("List of icons", totalIcons);

      setIcons(convertIconNames(totalIcons.slice(0, 300)));
      setTimeout(() => {
        setIcons(convertIconNames([].concat(totalIcons)));
    }, 3000);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Icons</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar 
            showCancelButton="never"
            ref={searchbar}
          />
        </IonToolbar>
      </IonHeader>

      {/* <IonContent className="ion-padding"> */}
      <IonContent>
        {icons !== undefined && icons.length > 0 &&
        <IonGrid>
          <IonRow>
            {icons.map((icon: string) => (
              <IonCol onClick={() => onClickIcon(icon)}>
                {//@ts-ignore
                // https://github.com/ionic-team/ionic-framework/issues/22181
                <IonIcon icon={Icons[icon]} color={getRandomColor()} style={styles.icon}/>
                }
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        }
      </IonContent>
    </IonPage>
  )
}

const styles = {
  icon: {
    fontSize: "500%",
  }
}

const getRandomColor = () => {
  const items = [
    "secondary",
    "primary",
    "danger",
    "warning",
    "dark",
    "medium",
    "success",
    "tertiary",
  ];
  return items[Math.floor(Math.random() * items.length)];
};