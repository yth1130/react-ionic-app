import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonNav, IonPage, IonRouterOutlet, IonTitle, IonToolbar, useIonRouter } from '@ionic/react'
import { logoTux } from 'ionicons/icons'
import React from 'react'
import { Redirect, Route, useHistory } from 'react-router'
import { Header } from '../../components/Header'
import { register } from '../../serviceWorkerRegistration'
import { ControllersTab } from './ControllersTab'
import { GamesTabDetailPage } from './GamesTabDetailPage'
import { MusicTab } from './MusicTab'

export const GamesTab: React.FC = () => {
  const history = useHistory();
  // const router = useIonRouter();
  const onClickButton = () => {
    // history.replace("/detail", {title:"asd"});
    // router.push("/detail", "forward", "push", {});
    history.push("/detail", { 
      title: 'Tux',
      icon: logoTux,
      description: 'The official mascot of the Linux kernel!',
      color: '#000'
    });
  }

  return (
    <IonPage>
      <Header title="Games" />
      <IonContent>
        {/* <IonRouterOutlet> */}
          {/* <Redirect exact path="/tabs/games" to="/tabs/games" /> */}
          {/* <Route path="/tabs/games/detail" render={() => <GamesTabDetailPage />} exact /> */}
        {/* </IonRouterOutlet> */}
        {/* <IonButton expand="full" color="secondary" onClick={() => showDetail("Tux")}> */}
        {/* <IonButton expand="full" color="secondary" onClick={() => history.push("/tabs/games/detail")}> */}
        {/* <IonButton expand="full" color="secondary" routerLink="/tabs/music"> */}
        {/* <IonButton expand="full" color="secondary" routerLink="/detail" routerOptions="forward"> */}
        {/* <IonButton expand="full" color="secondary" onClick={() => history.replace("/detail", {title:"asd"})}> */}
        {/* <IonButton expand="full" color="secondary"> */}
        <IonButton expand="full" color="secondary" onClick={() => onClickButton()}>
          Open a detail nav with back button.
        </IonButton>
        This is not working. Issue is that the Nav and the Tabs are not working nicely
          together. We need an ion-nav element to do the push. So not resolved yet....
      </IonContent>
    </IonPage>
  )
}

// const showDetail = (title: string) => {
//   const nav = document.querySelector('ion-nav');
//   const tech = techs.find((tech) => tech.title === title);
//   console.log(tech);

//   // customElements.define("nav-detail", DetailPage);
  
//   nav?.push("nav-detail", { tech });
// }

// const DetailPage: React.FC<{tech: any}> = (props) => (
const DetailPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        {/* <IonTitle>{props.tech.title}</IonTitle> */}
        <IonTitle>asd</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {/* <p>{props.tech.description}</p> */}
      <p>qwe</p>
    </IonContent>
  </IonPage>
);

const techs = [
  {
    title: "Angular",
    icon: "angular",
    description: "A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.",
    color: "#E63135"
  },
  {
    title: "CSS3",
    icon: "css3",
    description: "The latest version of cascading stylesheets - the styling language of the web!",
    color: "#0CA9EA"
  },
  {
    title: "HTML5",
    icon: "html5",
    description: "The latest version of the web's markup language.",
    color: "#F46529"
  },
  {
    title: "JavaScript",
    icon: "javascript",
    description: "One of the most popular programming languages on the Web!",
    color: "#FFD439"
  },
  {
    title: "Sass",
    icon: "sass",
    description: "Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.",
    color: "#CE6296"
  },
  {
    title: "NodeJS",
    icon: "nodejs",
    description: "An open-source, cross-platform runtime environment for developing server-side Web applications.",
    color: "#78BD43"
  },
  {
    title: "Python",
    icon: "python",
    description: "A clear and powerful object-oriented programming language!",
    color: "#3575AC"
  },
  {
    title: "Markdown",
    icon: "markdown",
    description: "A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.",
    color: "#412159"
  },
  {
    title: "Tux",
    icon: "tux",
    description: "The official mascot of the Linux kernel!",
    color: "#000"
  }
];


// const registerWebComponentOnce = (selector:any, component:any) => {
//   if (document.createElement(selector).constructor !== HTMLElement) {
//       register(selector, component, []);
//   }
// };