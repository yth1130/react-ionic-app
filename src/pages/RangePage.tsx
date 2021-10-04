import { IonContent, IonIcon, IonItem, IonList, IonListHeader, IonPage, IonRange } from '@ionic/react'
import { brush, contrast, sunny, thermometer } from 'ionicons/icons'
import React, { useEffect, useRef } from 'react'
import { Header } from '../components/Header'

export const RangePage: React.FC = () => {
  const dualRangeRef = useRef<HTMLIonRangeElement>(null);

  useEffect(() => {
    if (dualRangeRef.current === null)
      return;
    console.log(dualRangeRef.current);
    dualRangeRef.current.value = { lower: 33, upper: 60 };
  }, [])
  
  return (
    <IonPage>
      <Header title="Range" />
      <IonContent>
        <IonList>
          <IonListHeader>Adjust Display</IonListHeader>
          <IonItem>
            <IonRange value={20}>
              <IonIcon slot="start" size="small" icon={sunny} />
              <IonIcon slot="end" icon={sunny} />
            </IonRange>
          </IonItem>
          <IonItem>
            <IonRange min={-200} max={200} pin color="secondary">
              <IonIcon slot="start" size="small" icon={contrast} />
              <IonIcon slot="end" icon={contrast} />
            </IonRange>
          </IonItem>
          <IonItem>
            <IonRange ref={dualRangeRef} dualKnobs pin color="dark">
              <IonIcon slot="start" size="small" icon={brush} />
              <IonIcon slot="end" icon={brush} />
            </IonRange>
          </IonItem>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} value={1400} snaps color="danger">
              <IonIcon slot="start" size="small" color="danger" icon={thermometer} />
              <IonIcon slot="end" color="danger" icon={thermometer} />
            </IonRange>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
