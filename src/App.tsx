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
import { BadgePage } from './pages/BadgePage';
import { ButtonPage } from './pages/ButtonPage';
import { CardPage } from './pages/CardPage';
import { CheckboxPage } from './pages/CheckboxPage';
import { ChipPage } from './pages/ChipPage';
import { ControllersTab } from './pages/tabs/ControllersTab';
import { DatetimePage } from './pages/DatetimePage';
import { FabPage } from './pages/FabPage';
import { GridPage } from './pages/GridPage';
import { IconPage } from './pages/IconPage';
import { InfiniteScrollPage } from './pages/InfiniteScrollPage';
import { InputPage } from './pages/InputPage';
import { ItemPage } from './pages/ItemPage';
import { ListPage } from './pages/ListPage';
import { NavPage } from './pages/NavPage';
import { NotePage } from './pages/NotePage';
import { NavDetailPage } from './pages/NavDetailPage';
import { ProgressPage } from './pages/ProgressPage';
import { RadioPage } from './pages/RadioPage';
import { RangePage } from './pages/RangePage';
import { RefresherPage } from './pages/RefresherPage';
import { ReorderPage } from './pages/ReorderPage';
import { SearchbarPage } from './pages/SearchbarPage';
import { SegmentPage } from './pages/SegmentPage';
import { SkeletonPage } from './pages/SkeletonPage';
import { SelectPage } from './pages/SelectPage';

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

          <Route path="/badge" render={() => <BadgePage />} />
          <Route path="/button" render={() => <ButtonPage />} />
          <Route path="/card" render={() => <CardPage />} />
          <Route path="/checkbox" render={() => <CheckboxPage />} />
          <Route path="/chip" render={() => <ChipPage />} />
          <Route path="/controllers" render={() => <ControllersTab />} />
          <Route path="/datetime" render={() => <DatetimePage />} />
          <Route path="/fab" render={() => <FabPage />} />

          <Route path="/grid" render={() => <GridPage />} />
          <Route path="/icon" render={() => <IconPage />} />
          {/* <Route path="/icon" component={IconPage} /> */}
          <Route path="/infinitescroll" render={() => <InfiniteScrollPage />} />

          <Route path="/input" render={() => <InputPage />} />
          <Route path="/item" render={() => <ItemPage />} />
          <Route path="/list" render={() => <ListPage />} />

          <Route path="/nav" render={() => <NavPage />} exact/>
          <Route path="/nav/detail" render={() => <NavDetailPage />} />

          <Route path="/note" render={() => <NotePage />} />
          <Route path="/progress" render={() => <ProgressPage />} />
          <Route path="/radio" render={() => <RadioPage />} />
          <Route path="/range" render={() => <RangePage />} />
          
          <Route path="/refresher" render={() => <RefresherPage />} />
          <Route path="/reorder" render={() => <ReorderPage />} />
          <Route path="/searchbar" render={() => <SearchbarPage />} />

          <Route path="/segment" render={() => <SegmentPage />} />
          <Route path="/select" render={() => <SelectPage />} />
          <Route path="/skeleton" render={() => <SkeletonPage />} />

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
