import { SearchbarChangeEventDetail } from '@ionic/core'
import { IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react'
import React, { useState } from 'react'
import { Header } from '../components/Header'

export const SearchbarPage: React.FC = () => {
  const [list, setList] = useState<string[]>([])

  useIonViewWillEnter(() => {
    setList(cities);
  });

  const processSearchbarChange = (event: CustomEvent<SearchbarChangeEventDetail>) => {
    // console.log(event.detail);
    const query = event.detail.value?.toLowerCase() as string;
    if (query === "") {
      setList(cities);
      return;
    }
    
    let newList = cities.filter(item => item.toLowerCase().includes(query));
    setList(newList);
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Searchbar</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar onIonChange={(e) => processSearchbarChange(e)}/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        {
          list.map((item, i) => (
            <IonItem key={i}>{item}</IonItem>
          ))
        }
        </IonList>
      </IonContent>
    </IonPage>
  )
}

const cities = [
  "Amsterdam",
  "Bogota",
  "Buenos",
  "Cairo",
  "Dhaka",
  "Edinburgh",
  "Geneva",
  "Genoa",
  "Glasgow",
  "Hanoi",
  "Hong",
  "Islamabad",
  "Istanbul",
  "Jakarta",
  "Kiel",
  "Kyoto",
  "Le Havre",
  "Lebanon",
  "Lhasa",
  "Lima",
  "London",
  "Los",
  "Madrid",
  "Manila",
  "New",
  "Olympia",
  "Oslo",
  "Panama",
  "Peking",
  "Philadelphia",
  "San",
  "Seoul",
  "Taipeh",
  "Tel",
  "Tokio",
  "Uelzen",
  "Washington",
];