import { IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

// https://dev.to/daviddalbusco/infinite-scroll-with-ionic-react-3a3i
export const InfiniteScrollPage: React.FC = () => {
  const [users, setUsers] = useState<any>([]);
  // const [disableScroll, setDisableScroll] = useState(false);

  useEffect(() => {
    setUsers(userData.slice(0, 20));
  }, [])

  const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

  const wait = (time: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  const infiniteAction = async(e: CustomEvent<void>) => {
    if (users.length < userData.length) {
      console.log("Loading data...");
      await wait(500);
      
      const loadNum = clamp(users.length + 5, 0, userData.length);
      setUsers(userData.slice(0, loadNum));
      console.log("Done");
      (e.target as HTMLIonInfiniteScrollElement).complete();
    } 
    else {
      console.log("No More Data");
      (e.target as HTMLIonInfiniteScrollElement).disabled = true;
    }
  }

  return (
    <IonPage>
      <Header title="Accounts - Scroll down to see it work!"/>
      <IonContent fullscreen>
        <IonList>
          {users.map((user:any, index: number) =>
            <IonItem>
              <IonAvatar slot="start">
                <img src={`https://www.gravatar.com/avatar/${index}?d=monsterid&f=y`}></img>
              </IonAvatar>
              <IonLabel>
                <h2>{user.name}</h2>
                <p>Created {user.created}</p>
              </IonLabel>
            </IonItem>
          )}
        </IonList>
        <IonInfiniteScroll
          threshold="100px"
          // disabled={disableScroll}
          onIonInfinite={(e: CustomEvent<void>) => infiniteAction(e)}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )
}

const userData = [
  {
    name: "Aline Grover",
    created: "November 28, 2012"
  },
  {
    name: "Nevada Anders",
    created: "January 18, 2014"
  },
  {
    name: "Nicholas Morissette",
    created: "November 11, 2014"
  },
  {
    name: "Rusty Umland",
    created: "January 8, 2019"
  },
  {
    name: "Amada Cerulli",
    created: "July 22, 2009"
  },
  {
    name: "Harriette Garcia",
    created: "July 29, 2018"
  },
  {
    name: "Erminia Marotz",
    created: "September 29, 2016"
  },
  {
    name: "Shanelle Parodi",
    created: "May 26, 2018"
  },
  {
    name: "Roger Leite",
    created: "August 6, 2015"
  },
  {
    name: "Latina Faulcon",
    created: "February 5, 2014"
  },
  {
    name: "Jerrie Hoekstra",
    created: "June 2, 2016"
  },
  {
    name: "Domonique Byam",
    created: "December 30, 2010"
  },
  {
    name: "Monnie Bonar",
    created: "December 20, 2018"
  },
  {
    name: "Chu Kahle",
    created: "November 17, 2017"
  },
  {
    name: "Allan Passman",
    created: "November 12, 2015"
  },
  {
    name: "Conrad Caliendo",
    created: "February 10, 2016"
  },
  {
    name: "Elma Chenier",
    created: "August 13, 2011"
  },
  {
    name: "Wendi Hirano",
    created: "July 27, 2018"
  },
  {
    name: "Loren Wordlaw",
    created: "December 20, 2014"
  },
  {
    name: "Hubert Frum",
    created: "January 21, 2013"
  },
  {
    name: "Rueben Basil",
    created: "December 2, 2013"
  },
  {
    name: "Krystyna Hardiman",
    created: "February 11, 2016"
  },
  {
    name: "Micki Murch",
    created: "December 17, 2009"
  },
  {
    name: "Allene Knight",
    created: "November 3, 2010"
  },
  {
    name: "Davis Lunsford",
    created: "October 17, 2011"
  },
  {
    name: "Elin Conte",
    created: "June 23, 2015"
  },
  {
    name: "Yasuko Hites",
    created: "August 25, 2017"
  },
  {
    name: "Gerri Pinon",
    created: "May 21, 2014"
  },
  {
    name: "Caryl Hawker",
    created: "April 13, 2018"
  },
  {
    name: "Savannah Hoard",
    created: "October 31, 2009"
  },
  {
    name: "Carolyn Knutsen",
    created: "July 16, 2015"
  },
  {
    name: "Shantay Mckissack",
    created: "July 9, 2010"
  },
  {
    name: "Vertie Pinales",
    created: "November 20, 2010"
  },
  {
    name: "Gidget Stuck",
    created: "August 17, 2017"
  },
  {
    name: "Drew Crownover",
    created: "August 30, 2017"
  },
  {
    name: "Vashti Krajewski",
    created: "January 25, 2018"
  },
  {
    name: "Candice Dike",
    created: "November 19, 2018"
  },
  {
    name: "Dorthey Buhler",
    created: "October 22, 2012"
  },
  {
    name: "Hailey Deluna",
    created: "September 13, 2012"
  },
  {
    name: "Richard Aaron",
    created: "April 27, 2016"
  }
];
