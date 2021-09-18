import { IonContent, IonHeader, IonLabel, IonPage, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import React from 'react'
import { Redirect, Route } from 'react-router';
import { Header } from '../components/Header';
import { ControllersTab } from './tabs/ControllersTab';
import { GamesTab } from './tabs/GamesTab';
import { MusicTab } from './tabs/MusicTab';

export const TabsPage: React.FC = () => {
  return (
    <IonPage>
      {/* <Header title="Tabs"/> */}

      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/tabs" to="/tabs/controllers" />
            <Route path="/tabs/controllers" render={() => <ControllersTab />} exact/>
            <Route path="/tabs/music" render={() => <MusicTab />} exact/>
            <Route path="/tabs/games" render={() => <GamesTab />} exact />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="controllers" href="/tabs/controllers">
              <IonLabel>Controllers</IonLabel>
            </IonTabButton>
            <IonTabButton tab="music" href="/tabs/music">
              <IonLabel>Music</IonLabel>
            </IonTabButton>
            <IonTabButton tab="games" href="/tabs/games">
              <IonLabel>Games</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonPage>

    // <IonTabs>
    //   <IonRouterOutlet>
    //     <Redirect exact path="/tabs" to="/tabs/controllers" />
    //     <Route path="/tabs/controllers" render={() => <ControllersTab />} exact />
    //     <Route path="/tabs/music" render={() => <MusicTab />} exact />
    //   </IonRouterOutlet>

    //   <IonTabBar slot="bottom">
    //     <IonTabButton tab="controllers" href="/tabs/controllers">
    //       <IonLabel>Controllers</IonLabel>
    //     </IonTabButton>
    //     <IonTabButton tab="music" href="/tabs/music">
    //       <IonLabel>Music</IonLabel>
    //     </IonTabButton>
    //   </IonTabBar>
    // </IonTabs>
  );
}
