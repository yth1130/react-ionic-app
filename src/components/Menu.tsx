import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle } from '@ionic/react'
import React from 'react'

const routes = {
  pages: [
    { title: 'Avatars', path: '/avatars'}, //, icon: calendarOutline },
    { title: 'Badge',   path: '/badge'}, //,   icon: peopleOutline },
    { title: 'Button',  path: '/button'}, //,  icon: mapOutline },
    { title: 'Slides',  path: '/slides'}, //,  icon: informationCircleOutline }
  ],
  // links: [
  //   { title: 'Rate this app', path: '/account', icon: person },
  //   { title: 'Go to GitHub for this app', path: '/support', icon: help },
  //   { title: 'Go to Ionic Forum', path: '/logout', icon: logOut }
  // ],
};

interface RouteItem {
  title: string,
  path: string,
}

export const Menu: React.FC = () => {

  const renderRouteItems = (items: RouteItem[]) => {
    return items
      .filter(routes => !!routes.path)
      .map(item => (
        // <IonMenuToggle key={item.title}>
        //   <IonItem routerLink={item.path}>
        <IonMenuToggle>
          <IonItem>
            {/* <IonIcon /> */}
            <IonLabel>{item.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));

  }
  return (
    <IonMenu contentId="main" menuId="main-menu">
      <IonContent>
        <IonList lines="none">
          <IonListHeader>Menu</IonListHeader>
          {/* <IonItem>hoho</IonItem>
          <IonItem>haha</IonItem> */}
          {renderRouteItems(routes.pages)}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}