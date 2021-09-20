import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonFab, IonFabButton, IonIcon, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Home from './pages/Home';
import { SlidesPage } from './pages/SlidesPage';
import { Menu } from './components/Menu';
import { codeWorking } from 'ionicons/icons'
import { Tutorial } from './pages/Tutorial';
import { TabsPage } from './pages/TabsPage';
import { AvatarPage } from './pages/AvatarPage';
import { GamesTabDetailPage } from './pages/tabs/GamesTabDetailPage';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route exact path="/" render={() => <Redirect to="/slides" />} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/slides" render={() => <SlidesPage />} />
          <Route path="/tabs" render={() => <TabsPage />} />
          <Route path="/avatars" render={() => <AvatarPage />} />

          <Route path="/detail" render={() => <GamesTabDetailPage />} />
          {/* <Route exact path="/slides" render={() => <Tutorial />} /> */}

          {/* <Route exact path="/" component={() => <Redirect to="/slides" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/slides" component={SlidesPage} />
          <Route exact path="/tabs" component={TabsPage} /> */}

        </IonRouterOutlet>
      </IonSplitPane>
      
      <IonFab horizontal="end" vertical="bottom" slot="fixed">
        <IonFabButton>
          <IonIcon icon={codeWorking}/>
        </IonFabButton>
      </IonFab>
      
    </IonReactRouter>
  </IonApp>
);

export default App;
