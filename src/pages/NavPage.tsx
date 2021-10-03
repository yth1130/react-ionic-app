import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'
import * as Icons from 'ionicons/icons'
import { useHistory } from 'react-router'

export const NavPage: React.FC = () => {
  const history = useHistory();

  const showDetail = (techTitle: string) => {
    const tech = techs.find((tech) => tech.title === techTitle);
    // console.log(tech);
    if (tech === undefined)
      return;
    tech.icon = convertIconName(tech.icon);
    history.push("/nav/detail", {tech});
  }

  return (
    <IonPage>
      <Header title="Nav" />
      <IonContent>
        <IonList>
          {
            techs.map(tech => (
              <IonItem button onClick={() => showDetail(tech.title)}>
                {//@ts-ignore
                <IonIcon style={{color: tech.color}} slot="start" icon={Icons[convertIconName(tech.icon)]}/>
                }
                <IonLabel>
                  <h3>{tech.title}</h3>
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  )
}

const capitalizeFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const convertIconName = (name: string) => {
  return "logo" + capitalizeFirstLetter(name);
}

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