import { IonAvatar, IonContent, IonItem, IonLabel, IonList, IonPage, IonRefresher, IonRefresherContent, useIonViewWillEnter } from '@ionic/react'
import React, { useRef, useState } from 'react'
import { Header } from '../components/Header'

export const RefresherPage: React.FC = () => {
  const refresherRef = useRef<HTMLIonRefresherElement>(null);
  const [messageList, setMessageList] = useState<any[]>([])

  useIonViewWillEnter(() => {
    prependMessages(5, true);
  })

  const chooseRandomName = () => {
    return names[Math.floor(Math.random() * names.length)];
  }

  const createMessage = (unread: boolean, index: number) => {
    return {
      unread: unread,
      index: index,
      name: chooseRandomName(),
    }
  }

  const prependMessages = (num: number, unread: boolean) => {
    // let list = messageList;
    let list: any[] = [];
    for (let index = 0; index < num; index++) {
      list.push(createMessage(unread, index));
    }
    // list = messageList.concat(list);
    list = list.concat(messageList);
    // list.forEach(element => {
    //   console.log(element);
    // });
    setMessageList(list);
  }

  const refreshAction = () => {
    console.log("Refresh action");
    setTimeout(() => {
      prependMessages(5, true);
      refresherRef?.current?.complete();
    }, 2000);
  }

  return (
    <IonPage>
      <Header title="Pull to refresh" />
      <IonContent>
        <IonRefresher
          slot="fixed"
          ref={refresherRef}
          onIonRefresh={() => refreshAction()}
        >
          <IonRefresherContent />
        </IonRefresher>
        <IonList>
          {
            messageList.map((message, i) => (
              <IonItem key={i}>
                {/* <div></div> */}
                <IonAvatar slot="start">
                  <img src={`https://www.gravatar.com/avatar/${message.index}?d=monsterid&f=y`} />
                </IonAvatar>
                <IonLabel className="ion-text-wrap">
                  <h2>{message.name}</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing slit</h3>
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  )
}

const names = [
  "Burt Bear",
  "Charlie Cheetah",
  "Donald Duck",
  "Eva Eagle",
  "Ellie Elephant",
  "Gino Giraffe",
  "Isabella Iguana",
  "Karl Kitten",
  "Lionel Lion",
  "Molly Mouse",
  "Paul Puppy",
  "Rachel Rabbit",
  "Ted Turtle",
];