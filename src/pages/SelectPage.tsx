import { IonContent, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'

export const SelectPage: React.FC = () => {
  const selectChange = (event: { detail: any; }) => {
    console.log("Select change ", event.detail);
  };
  return (
    <IonPage>
      <Header title="Select" />
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Pet</IonLabel>
            <IonSelect onIonChange={selectChange}>
              <IonSelectOption value="cat">Cat</IonSelectOption>
              <IonSelectOption value="dog">Dog</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Gaming</IonLabel>
            <IonSelect onIonChange={selectChange} interface="popover">
              <IonSelectOption value="nes">NES</IonSelectOption>
              <IonSelectOption value="n64">Nintendo64</IonSelectOption>
              <IonSelectOption value="ps">PlayStation</IonSelectOption>
              <IonSelectOption value="genesis">Sega Genesis</IonSelectOption>
              <IonSelectOption value="saturn">Sega Saturn</IonSelectOption>
              <IonSelectOption value="snes">SNES</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Notification</IonLabel>
            <IonSelect onIonChange={selectChange} value="notifications" interface="action-sheet">
              <IonSelectOption value="enable">Enable</IonSelectOption>
              <IonSelectOption value="mute">Mute</IonSelectOption>
              <IonSelectOption value="mute_week">Mute for a week</IonSelectOption>
              <IonSelectOption value="mute_year">Mute for a year</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Operating System</IonLabel>
            <IonSelect onIonChange={selectChange} okText="Okay" cancelText="Nah">
              <IonSelectOption value="dos">Dos</IonSelectOption>
              <IonSelectOption value="linux">Linux</IonSelectOption>
              <IonSelectOption value="mac7">Mac OS 7</IonSelectOption>
              <IonSelectOption value="mac8">Mac OS 8</IonSelectOption>
              <IonSelectOption value="win3.1">Windows 3.1</IonSelectOption>
              <IonSelectOption value="win95">Windows 95</IonSelectOption>
              <IonSelectOption value="win98">Windows 98</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Music</IonLabel>
            <IonSelect onIonChange={selectChange} value="nirvana">
              <IonSelectOption>Alice in Chains</IonSelectOption>
              <IonSelectOption>Green Day</IonSelectOption>
              <IonSelectOption value="nirvana">Nirvana</IonSelectOption>
              <IonSelectOption>Pearl Jam</IonSelectOption>
              <IonSelectOption>Smashing Pumkins</IonSelectOption>
              <IonSelectOption>Soundgarden</IonSelectOption>
              <IonSelectOption>Stone Temple Pilots</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Month</IonLabel>
            <IonSelect onIonChange={selectChange} value="12">
              <IonSelectOption value="01">January</IonSelectOption>
              <IonSelectOption value="02">February</IonSelectOption>
              <IonSelectOption value="03">March</IonSelectOption>
              <IonSelectOption value="04">April</IonSelectOption>
              <IonSelectOption value="05">May</IonSelectOption>
              <IonSelectOption value="06">June</IonSelectOption>
              <IonSelectOption value="07">July</IonSelectOption>
              <IonSelectOption value="08">August</IonSelectOption>
              <IonSelectOption value="09">September</IonSelectOption>
              <IonSelectOption value="10">October</IonSelectOption>
              <IonSelectOption value="11">November</IonSelectOption>
              <IonSelectOption value="12">December</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Year</IonLabel>
            <IonSelect onIonChange={selectChange} value="1993">
              <IonSelectOption value="1988">1988</IonSelectOption>
              <IonSelectOption value="1989">1989</IonSelectOption>
              <IonSelectOption value="1990">1990</IonSelectOption>
              <IonSelectOption value="1991">1991</IonSelectOption>
              <IonSelectOption value="1992">1992</IonSelectOption>
              <IonSelectOption value="1993">1993</IonSelectOption>
              <IonSelectOption value="1994">1994</IonSelectOption>
              <IonSelectOption value="1995">1995</IonSelectOption>
              <IonSelectOption value="1996">1996</IonSelectOption>
              <IonSelectOption value="1997">1997</IonSelectOption>
              <IonSelectOption value="1998">1998</IonSelectOption>
              <IonSelectOption value="1999">1999</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
