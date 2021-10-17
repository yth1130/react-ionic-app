import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react'
import { batteryHalf, callOutline, codeDownloadOutline, heart, heartCircle } from 'ionicons/icons';
import React from 'react'

import './Menu.css'

const routes = {
  pages: [
    { title: 'Avatars', path: '/avatars', icon: callOutline },
    { title: 'Badge',   path: '/badge',   icon: heart },
    { title: 'Button',  path: '/button',  icon: batteryHalf },
    { title: 'Card',    path: '/card',    icon: batteryHalf },
    { title: 'Checkbox',path: '/checkbox',    icon: batteryHalf },
    { title: 'Chip',    path: '/chip',    icon: batteryHalf },
    { title: 'Controllers',    path: '/controllers',    icon: batteryHalf },
    { title: 'Datetime',path: '/datetime',icon: batteryHalf },
    { title: 'Fab',     path: '/fab',icon: batteryHalf },
    { title: 'Grid',    path: '/grid',icon: batteryHalf },
    { title: 'Icon',    path: '/icon',icon: batteryHalf },
    { title: 'Infinite Scroll',    path: '/infinitescroll',icon: batteryHalf },
    { title: 'Inputs',    path: '/input',icon: batteryHalf },
    { title: 'Item',    path: '/item',icon: batteryHalf },

    { title: 'List',    path: '/list',icon: batteryHalf },
    { title: 'Nav',    path: '/nav',icon: batteryHalf },
    { title: 'Note',    path: '/note',icon: batteryHalf },
    { title: 'Progress',    path: '/progress',icon: batteryHalf },
    { title: 'Radio',    path: '/radio',icon: batteryHalf },
    { title: 'Range',    path: '/range',icon: batteryHalf },

    { title: 'Refresher',    path: '/refresher',icon: batteryHalf },
    { title: 'Reorder',    path: '/reorder',icon: batteryHalf },
    { title: 'Searchbar',    path: '/searchbar',icon: batteryHalf },

    { title: 'Segment',    path: '/segment',icon: batteryHalf },
    { title: 'Select',    path: '/select',icon: batteryHalf },
    { title: 'Skeleton',    path: '/skeleton',icon: batteryHalf },

    { title: 'Slides',  path: '/slides',  icon: codeDownloadOutline },
    { title: 'Tabs',    path: '/tabs',    icon: heartCircle },

    { title: 'Thumbnail', path: '/thumbnail', icon: heartCircle },
    { title: 'Timeline', path: '/timeline', icon: heartCircle },
    { title: 'Toggle', path: '/toggle', icon: heartCircle },
    { title: 'Toolbar', path: '/toolbar', icon: heartCircle },
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
  icon: string,
}

export const Menu: React.FC = () => {

  const renderRouteItems = (items: RouteItem[]) => {
    return items
      .filter(routes => !!routes.path)
      .map(item => (
        // <IonMenuToggle key={item.title}>
        //   <IonItem routerLink={item.path}>
        // 아이템에는 키가 있어야 한다.
        // <IonMenuToggle key={item.title}>
          <IonItem key={item.title} routerLink={item.path}>
            <IonIcon slot="start" icon={item.icon} />
            <IonLabel>{item.title}</IonLabel>
          </IonItem>
        // </IonMenuToggle>
      ));

  }
  return (
    <IonMenu contentId="main" menuId="main-menu" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonList lines="none"> */}
        <IonList>
          {/* <IonListHeader>Menu</IonListHeader> */}
          {/* <IonItem>hoho</IonItem>
          <IonItem>haha</IonItem> */}
          {renderRouteItems(routes.pages)}
          {/* {renderRouteItems(routes.pages)}
          {renderRouteItems(routes.pages)}
          {renderRouteItems(routes.pages)}
          {renderRouteItems(routes.pages)} */}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}