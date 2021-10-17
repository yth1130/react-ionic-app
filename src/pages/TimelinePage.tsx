import { IonCard, IonContent, IonItem, IonPage } from '@ionic/react'
import React from 'react'
import { Header } from '../components/Header'
import "./TimelinePage.css"

export const TimelinePage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Timeline - experimental" />
      <IonContent>
        <TimelineDemo1 />
        <hr />
        <TimelineDemo2 />
        <hr />
        <TimelineDemo3 />
        <hr />
        <TimelineDemo4 />
        <hr />
        <TimelineDemo5 />
        <br />
        <TimelineDemo6 />
        <br />
        <TimelineDemo7 />
        <br />
        <TimelineDemo8 />
        <br />
        <TimelineDemo9 />
        <br />
        <TimelineDemo10 />
        <br />
        <TimelineDemo11 />
        <br />
        <TimelineDemo12 />
      </IonContent>
    </IonPage>
  )
}

const TimelineDemo1: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-1</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            <a href="/ionic/Timeline" className="timeline">
              <div className="timeline-icon"><i className="fa fa-globe"></i></div>
              <div className="timeline-content">
                <h3 className="title">Web Designer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum
                  odit quasi ullam voluptatum.
                </p>
              </div>
            </a>
            <a href="/ionic/Timeline" className="timeline">
              <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
              <div className="timeline-content">
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum
                  odit quasi ullam voluptatum.
                </p>
              </div>
            </a>
            <a href="/ionic/Timeline" className="timeline">
              <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
              <div className="timeline-content">
                <h3 className="title">Web Designer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum
                  odit quasi ullam voluptatum.
                </p>
              </div>
            </a>
            <a href="/ionic/Timeline" className="timeline">
              <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
              <div className="timeline-content">
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum
                  odit quasi ullam voluptatum.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo2: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-2</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline2">
            <div className="timeline">
              <span className="icon fa fa-globe"></span>
              <a href="/ionic/Timeline" className="timeline-content">
                <h3 className="title">Web Designer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </a>
            </div>
            <div className="timeline">
              <span className="icon fa fa-rocket"></span>
              <a href="/ionic/Timeline" className="timeline-content">
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </a>
            </div>
            <div className="timeline">
              <span className="icon fa fa-briefcase"></span>
              <a href="/ionic/Timeline" className="timeline-content">
                <h3 className="title">Web Designer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </a>
            </div>
            <div className="timeline">
              <span className="icon fa fa-mobile"></span>
              <a href="/ionic/Timeline" className="timeline-content">
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo3: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-3</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline3">
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2018</span>
                <h3 className="title">Web Designer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2017</span>
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2016</span>
                <h3 className="title">Web Designer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2015</span>
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  malesuada tellus lorem, et condimentum neque commodo quis.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo4: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-4</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline4">
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2018</span>
                <div className="inner-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In
                    suscipit quam eget dui auctor.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2017</span>
                <div className="inner-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In
                    suscipit quam eget dui auctor.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2016</span>
                <div className="inner-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In
                    suscipit quam eget dui auctor.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2015</span>
                <div className="inner-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In
                    suscipit quam eget dui auctor.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo5: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-5</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline5">
            <div className="timeline">
              <div className="timeline-icon"><span className="year">2018</span></div>
              <div className="timeline-content">
                <h3 className="title">Web Desginer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem
                  erat.
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon"><span className="year">2017</span></div>
              <div className="timeline-content">
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem
                  erat.
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon"><span className="year">2016</span></div>
              <div className="timeline-content">
                <h3 className="title">Web Desginer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem
                  erat.
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon"><span className="year">2015</span></div>
              <div className="timeline-content">
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem
                  erat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo6: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-6</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline6">
            <div className="timeline">
              <div className="timeline-content">
                <span className="year">2018</span>
                <div className="content-inner">
                  <span className="icon"> <i className="fa fa-globe"></i> </span>
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="year">2017</span>
                <div className="content-inner">
                  <span className="icon"> <i className="fa fa-rocket"></i> </span>
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="year">2016</span>
                <div className="content-inner">
                  <span className="icon"> <i className="fa fa-briefcase"></i> </span>
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="year">2015</span>
                <div className="content-inner">
                  <span className="icon"> <i className="fa fa-mobile"></i> </span>
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo7: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-7</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline7">
            <div className="timeline">
              <div className="timeline-icon"><i className="fa fa-globe"></i></div>
              <span className="year">2018</span>
              <div className="timeline-content">
                <h5 className="title">Web Desginer</h5>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim. Aenean hendrerit justo sed.
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
              <span className="year">2017</span>
              <div className="timeline-content">
                <h5 className="title">Web Developer</h5>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim. Aenean hendrerit justo sed.
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
              <span className="year">2016</span>
              <div className="timeline-content">
                <h5 className="title">Web Desginer</h5>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim. Aenean hendrerit justo sed.
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
              <span className="year">2015</span>
              <div className="timeline-content">
                <h5 className="title">Web Developer</h5>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim. Aenean hendrerit justo sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo8: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-8</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline8">
            <div className="timeline">
              <span className="timeline-icon"></span>
              <span className="year">2017</span>
              <div className="timeline-content">
                <h3 className="title">Web Desginer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula
                  erat sed dictum. Integer quis turpis magna. Suspendisse
                  tincidunt elit at erat tincidunt, vel vulputate arcu dapibus.
                  Etiam accumsan ornare posuere. Nullam est.
                </p>
              </div>
            </div>
            <div className="timeline">
              <span className="timeline-icon"></span>
              <span className="year">2016</span>
              <div className="timeline-content">
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula
                  erat sed dictum. Integer quis turpis magna. Suspendisse
                  tincidunt elit at erat tincidunt, vel vulputate arcu dapibus.
                  Etiam accumsan ornare posuere. Nullam est.
                </p>
              </div>
            </div>
            <div className="timeline">
              <span className="timeline-icon"></span>
              <span className="year">2015</span>
              <div className="timeline-content">
                <h3 className="title">Web Desginer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula
                  erat sed dictum. Integer quis turpis magna. Suspendisse
                  tincidunt elit at erat tincidunt, vel vulputate arcu dapibus.
                  Etiam accumsan ornare posuere. Nullam est.
                </p>
              </div>
            </div>
            <div className="timeline">
              <span className="timeline-icon"></span>
              <span className="year">2014</span>
              <div className="timeline-content">
                <h3 className="title">Web Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula
                  erat sed dictum. Integer quis turpis magna. Suspendisse
                  tincidunt elit at erat tincidunt, vel vulputate arcu dapibus.
                  Etiam accumsan ornare posuere. Nullam est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo9: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-9</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline9">
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span> <i className="fa fa-globe"></i> </span>
                </div>
                <div className="content">
                  <span className="year">2014 - 2015</span>
                  <h4 className="title">Web Desginer</h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                    non lectus justo.Nam ultricies laoreet massa sed maximus.
                    Curabitur tristique sagittis scelerisque.Vivamus posuere nisi
                    quis tortor interdum, in finibus risus convallis.Suspendisse
                    efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                  </p>
                  <div className="icon"><span></span></div>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span> <i className="fa fa-rocket"></i> </span>
                </div>
                <div className="content">
                  <span className="year">2015 - 2016</span>
                  <h4 className="title">Web Developer</h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                    non lectus justo.Nam ultricies laoreet massa sed maximus.
                    Curabitur tristique sagittis scelerisque.Vivamus posuere nisi
                    quis tortor interdum, in finibus risus convallis.Suspendisse
                    efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                  </p>
                  <div className="icon"><span></span></div>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span> <i className="fa fa-briefcase"></i> </span>
                </div>
                <div className="content">
                  <span className="year">2016 - 2017</span>
                  <h4 className="title">Web Desginer</h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                    non lectus justo.Nam ultricies laoreet massa sed maximus.
                    Curabitur tristique sagittis scelerisque.Vivamus posuere nisi
                    quis tortor interdum, in finibus risus convallis.Suspendisse
                    efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                  </p>
                  <div className="icon"><span></span></div>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span> <i className="fa fa-mobile"></i> </span>
                </div>
                <div className="content">
                  <span className="year">2017 - 2018</span>
                  <h4 className="title">Web Developer</h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                    non lectus justo.Nam ultricies laoreet massa sed maximus.
                    Curabitur tristique sagittis scelerisque.Vivamus posuere nisi
                    quis tortor interdum, in finibus risus convallis.Suspendisse
                    efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                  </p>
                  <div className="icon"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo10: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-10</h4>
      <div className="row">
        <div className="main-timeline10">
          <div className="col-md-3 col-sm-6 timeline">
            <div className="timeline-inner">
              <div className="year">2015</div>
              <div className="timeline-content">
                <div className="post">Web Desginer</div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget ullamcorper odio. Phasellus congue varius placerat. Quisque
                  vel purus convallis.
                </p>
              </div>
              <div className="timeline-icon"><i className="fa fa-globe"></i></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 timeline">
            <div className="timeline-inner">
              <div className="year">2016</div>
              <div className="timeline-content">
                <div className="post">Web Developer</div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget ullamcorper odio. Phasellus congue varius placerat. Quisque
                  vel purus convallis.
                </p>
              </div>
              <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 timeline">
            <div className="timeline-inner">
              <div className="year">2018</div>
              <div className="timeline-content">
                <div className="post">Web Desginer</div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget ullamcorper odio. Phasellus congue varius placerat. Quisque
                  vel purus convallis.
                </p>
              </div>
              <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 timeline">
            <div className="timeline-inner">
              <div className="year">2017</div>
              <div className="timeline-content">
                <div className="post">Web Developer</div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget ullamcorper odio. Phasellus congue varius placerat. Quisque
                  vel purus convallis.
                </p>
              </div>
              <div className="timeline-icon"><i className="fa fa-camera"></i></div>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo11: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-11</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline11">
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2018</span>
                <div className="inner-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2017</span>
                <div className="inner-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2016</span>
                <div className="inner-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2015</span>
                <div className="inner-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="/ionic/Timeline" className="timeline-content">
                <span className="year">2014</span>
                <div className="inner-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis. Quisque eu ornare risus, vitae fermentum eros. Etiam
                    venenatis ac.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}

const TimelineDemo12: React.FC = () => {
  return (
    <IonCard>
      <h4 className="timeline-title">Timeline Style : Demo-12</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline12">
            <div className="col-md-2 col-sm-4 timeline">
              <span className="timeline-icon"> <i className="fa fa-key"></i> </span>
              <div className="border"></div>
              <div className="timeline-content">
                <h4 className="title">Williamson</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 timeline">
              <div className="timeline-content">
                <h4 className="title">Kristiana</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <div className="border"></div>
              <span className="timeline-icon"> <i className="fa fa-key"></i> </span>
            </div>
            <div className="col-md-2 col-sm-4 timeline">
              <span className="timeline-icon"> <i className="fa fa-key"></i> </span>
              <div className="border"></div>
              <div className="timeline-content">
                <h4 className="title">Steve thomas</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 timeline">
              <div className="timeline-content">
                <h4 className="title">Miranda joy</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <div className="border"></div>
              <span className="timeline-icon"> <i className="fa fa-key"></i> </span>
            </div>
            <div className="col-md-2 col-sm-4 timeline">
              <span className="timeline-icon"> <i className="fa fa-key"></i> </span>
              <div className="border"></div>
              <div className="timeline-content">
                <h4 className="title">Williamson</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 timeline">
              <div className="timeline-content">
                <h4 className="title">Kristiana</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <div className="border"></div>
              <span className="timeline-icon"> <i className="fa fa-key"></i> </span>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  )
}