import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';
// import orbitalGIF from '../assets/images/Orbital720p.gif';
// import sicknessTracker from '../assets/images/sicknessTracker.png'
import sicknessTrackerGif from '../assets/images/Tracker.gif'
// import orbital from '../assets/images/orbital.png'
import orbital from '../assets/images/orbital.gif'
// import spendee from '../assets/images/spendee.gif'
import spendee from '../assets/images/spendee.png'

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            About Me
          </h2>
          <p>
          I am a recent graduate of CodeClan's immersive 16 week course which provides students 
          with hands on training and solid understanding of the principles of Object Orientated Programming, 
          Test Driven Development and Agile Methodology. 
          <br />
          A teaching environment comprised of agile methodologies
          in 3-week learning blocks, 2-week project sprints and daily morning stand-ups.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <a href='https://github.com/danieljanowski' className="icon brands fa-github major style3">
              <span className="label">Lorem</span>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/daniel-janowski/' className="icon brands fa-linkedin major style3">
              <span className="label">Ipsum</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={sicknessTrackerGif} alt="" />
        </div>
        <div className="content">
          <h2>
          Employee Absence Tracker with Bardford Score
          </h2>
          <h3>
            5 weeks group (2-3 people) project
          </h3>
          <p>
          Web application in Javascript React (Hooks, Context, Router), Firebase (Firestore, Authentication)
          and Material UI. Full Stack application for Edinburgh Charity to allow track sickness record, 
          provide Bradford Score and sickness pay criteria for all the employees/volunteers and generate reports.
          <br />
          (due to the NDA, source code or live application can't be shared publicly)
          </p>
        </div>
        
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={orbital} alt="" />
        </div>
        <div className="content">
          <h2>
          ORBITAL - SPACE EDUCATIONAL APP
          </h2>
          <h3>
          5 days group project
          </h3>
          <p>
          A interactive web application built in JavaScript, Vue.js, Express.js, MongoDB, CSS and HTML utilising Leaflet maps and 4 different public APIs. Application is able to display and filter photos from Mars Rovers, show an information about planets in an interactive way, track real-time ISS position, show current people in space and display NASA photo of the day.
          </p>
          <ul className="actions fit">
          <li>
            <a href="https://github.com/danieljanowski/JavascriptProject" className="button fit">
              Source Code
            </a>
          </li>
          <li>
            <a href="https://orbital-space-app.herokuapp.com/" className="button fit">
              See Live
            </a>
          </li>
        </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={spendee} alt="" />
        </div>
        <div className="content">
          <h2>
          SPENDEE - FAMILY MONEY TRACKER
          </h2>
          <h3>
          5 days solo project
          </h3>
          <p>
          My first project on CodeClan. Web application in Ruby, Sinatra, PostgreSQL, HTML, CSS, PG gem and Minitest. Allows user to log the spending, filter transactions, learn habits and manage budget. Multiuser support allows parents and children log and keep track of pocket money.
          </p>
          <ul className="actions fit">
          <li>
            <a href="https://github.com/danieljanowski/CodeClan_Wk5_Project_Family_Spending_Tracker" className="button fit">
              Source Code
            </a>
          </li>
          <li>
            <a href="https://family-money-tracker.herokuapp.com" className="button fit">
              See Live
            </a>
          </li>
        </ul>
        </div>
      </section>
    </section>

    {/* <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;
