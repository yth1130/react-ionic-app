import { actionSheetController, ActionSheetOptions, AlertOptions, PickerButton } from '@ionic/core'
import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar, useIonActionSheet, useIonAlert, useIonLoading, useIonModal, useIonPicker, useIonPopover, useIonToast } from '@ionic/react'
import React from 'react'
import { Header } from '../../components/Header'

export const ControllersTab: React.FC = () => {
  const [showActionSheet] = useIonActionSheet();
  const [showAlert] = useIonAlert();

  const [showModal, hideModal] = useIonModal(Modal, { onDismiss: () => hideModal() });
  const [showPopover, hidePopover] = useIonPopover(Popover, { onHide: () => hidePopover() })

  const [showLoading] = useIonLoading();
  const [showPicker] = useIonPicker();
  const [showToast] = useIonToast();

  return (
    <IonPage>
      <Header title="Controllers"/>

      <IonContent fullscreen>
        <IonButton expand="block" onClick={() => showActionSheet(basicActionSheet)}>
          Action Sheet
        </IonButton>
        <IonButton expand="block" onClick={() => showAlert(simpleAlert)}>
          Show Simple Alert
        </IonButton>
        <IonButton expand="block" onClick={() => showAlert(radioAlert)}>
          Show Radio Alert
        </IonButton>
        <IonButton expand="block" onClick={() => showAlert(checkboxAlert)}>
          Show Checkbox Alert
        </IonButton>
        <IonButton expand="block" onClick={() => showAlert(inputAlert)}>
          Show Input Alert
        </IonButton>
        <br />
        <IonButton expand="block" onClick={() => showModal()}>
          Show Modal
        </IonButton>
        <IonButton expand="block" onClick={() => showPopover()}>
          Show Popover
        </IonButton>
        <IonButton expand="block" onClick={() => showLoading("Loading", 2000, "dots")}>
          Show Loading
        </IonButton>
        <IonButton expand="block" onClick={() => showPicker(pickerOptions, pickerButtons)}>
          Show Picker
        </IonButton>
        <IonButton expand="block" onClick={() => showToast({ color: "light", duration: 2000, message: "Paired successfully" })}>
          Show Toast
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

const basicActionSheet = {
  header: "Albums",
  buttons: [
    {
      text: "Delete",
      role: "destructive",
      handler: () => {
        console.log("Delete clicked");
      },
    },
    {
      text: "Share",
      handler: () => {
        console.log("Share clicked");
      },
    },
    {
      text: "Play",
      handler: () => {
        console.log("Play clicked");
      },
    },
    {
      text: "Favorite",
      handler: () => {
        console.log("Favorite clicked");
      },
    },
    {
      text: "Cancel",
      role: "cancel",
      handler: () => {
        console.log("Cancel clicked");
      },
    },
  ],
};

const simpleAlert = {
  header: "Prompt!",
  subHeader: "Subtitle",
  message: "This is an alert message.",
  buttons: ["OK"],
}

const radioAlert: AlertOptions = {
  header: "Radio",
  subHeader: "Subtitle",
  message: "This is an alert message.",
  inputs: [
    {
      type: "radio",
      label: "Radio 1",
      value: "value1",
      checked: true,
    },
    {
      type: "radio",
      label: "Radio 2",
      value: "value2",
    },
    {
      type: "radio",
      label: "Radio 3",
      value: "value3",
    },
    {
      type: "radio",
      label: "Radio 4",
      value: "value4",
    },
    {
      type: "radio",
      label: "Radio 5",
      value: "value5",
    },
    {
      type: "radio",
      label:
        "Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ",
      value: "value6",
    },
  ],
  buttons: [
    {
      text: "Cancel",
      role: "cancel",
      cssClass: "secondary",
      handler: () => {
        console.log("Confirm Cancel");
      },
    },
    {
      text: "Ok",
      handler: (data) => {
        console.log("Confirm Ok", data);
      },
    },
  ],
}

const checkboxAlert: AlertOptions = {
  header: "Radio",
  subHeader: "Subtitle",
  message: "This is an alert message.",
  inputs: [
    {
      type: "checkbox",
      label: "Checkbox 1",
      value: "value1",
      checked: true,
    },
    {
      type: "checkbox",
      label: "Checkbox 2",
      value: "value2",
    },
    {
      type: "checkbox",
      label: "Checkbox 3",
      value: "value3",
    },
    {
      type: "checkbox",
      label: "Checkbox 4",
      value: "value4",
    },
    {
      type: "checkbox",
      label: "Checkbox 5",
      value: "value5",
    },
    {
      type: "checkbox",
      label: "Checkbox 6",
      value: "value6",
    },
  ],
  buttons: [
    {
      text: "Cancel",
      role: "cancel",
      cssClass: "secondary",
      handler: () => {
        console.log("Confirm Cancel");
      },
    },
    {
      text: "Ok",
      handler: (data) => {
        console.log("Confirm Ok", data);
      },
    },
  ],
};

const inputAlert: AlertOptions = {
  header: "Prompt!",
  inputs: [
    {
      placeholder: "Placeholder 1",
    },
    {
      name: "name2",
      id: "name2-id",
      value: "hello",
      placeholder: "Placeholder 2",
    },
    {
      name: "name3",
      value: "http://ionicframework.com",
      type: "url",
      placeholder: "Favorite site ever",
    },
    // input date with min & max
    {
      name: "name4",
      type: "date",
      min: "2017-03-01",
      max: "2018-01-12",
    },
    // input date without min nor max
    {
      name: "name5",
      type: "date",
    },
    {
      name: "name6",
      type: "number",
      min: -5,
      max: 10,
    },
    {
      name: "name7",
      type: "number",
    },
  ],
  buttons: [
    {
      text: "Cancel",
      role: "cancel",
      cssClass: "secondary",
      handler: () => {
        console.log("Confirm Cancel");
      },
    },
    {
      text: "Ok",
      handler: (data) => {
        console.log("Confirm Ok", data);
      },
    },
  ],
};

const Modal: React.FC<{
  count: number;
  onDismiss: () => void;
  onIncrement: () => void;
}> = ({ count, onDismiss, onIncrement }) => {
  let overlayElement:any = null;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal Content</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss()}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <ModalListItem imgSrc="https://www.gravatar.com/avatar/1?d=monsterid&f=y" title="Gollum" content="Sneaky little hobbitses !" />
          <ModalListItem imgSrc="https://www.gravatar.com/avatar/2?d=monsterid&f=y" title="Frodo" content="Go back, Sam! I'm going to Mordor alone!" />
          <ModalListItem imgSrc="https://www.gravatar.com/avatar/3?d=monsterid&f=y" title="Samwise" content="What we need is a few good taters." />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const ModalListItem: React.FC<{imgSrc:string, title:string, content:string}> = (props) => (
  <IonItem>
    <IonAvatar slot="start">
      <img src={props.imgSrc} />
    </IonAvatar>
    <IonLabel>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </IonLabel>
  </IonItem>
);

const Popover: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonContent>
    <IonList>
      <IonListHeader>Ionic</IonListHeader>
      <IonItem button onClick={() => onHide()}>Learn Ionic</IonItem>
      <IonItem button onClick={() => onHide()}>Documentation</IonItem>
      <IonItem button onClick={() => onHide()}>Showcase</IonItem>
      <IonItem button onClick={() => onHide()}>GitHub Repo</IonItem>
      {/* <IonItem lines="none" detail={false} button onClick={onHide}>
        Close
      </IonItem> */}
    </IonList>
    <IonButton expand="block" onClick={() => onHide()}>
      Close
    </IonButton>
  </IonContent>
);

const pickerOptions = [
  {
    name: "col-0",
    options: [
      { text: "Dog", value: 0 },
      { text: "Cat", value: 1 },
      { text: "Bird", value: 2 },
      { text: "Lizard", value: 3 },
      { text: "Chinchilla", value: 4 },
    ],
  },
];

const pickerButtons: PickerButton[] = [
  {
    text: "Cancel",
    role: "cancel",
  },
  {
    text: "Confirm",
    handler: (value) => {
      console.log(`Got Value `, value);
    },
  },
];