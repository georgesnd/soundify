import React from "react";
import "./support.css";
import { Container, Form, FormControl } from "react-bootstrap";
// import { Link } from "react-router-dom";
import {BsMap} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {GiSmartphone} from "react-icons/gi"

export default function Support() {
  return (
    <div className="support">
      <div className="support-background">
        <h1>How can we help you?</h1>

        <Container className="search">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>

        <div className="options">
          <div>
            <h4>LOGGING IN</h4>
            <a href="">
              <p>Can't reset password</p>
            </a>
          </div>
          <div>
            <h4>AVAILABLE PLANS</h4>
            <a href="">
              <p>Start or join Family Plan</p>
            </a>
          </div>
          <div>
            <h4>LOGGING IN</h4>
            <a href="">
              <p>Can't remember login details</p>
            </a>
          </div>
          <div>
            <h4>LOGGING IN</h4>
            <a href="">
              <p>Facebook login help</p>
            </a>
          </div>
        </div>
      </div>

      <div className="options2">
        <div className="card">
          <h2>Payment Help</h2>
          <ul>
            <li>Manage payments</li>
            <li>Payment methods</li>
            <li>Charge help</li>
          </ul>
        </div>

        <div className="card">
          <h2>Account Help</h2>

          <ul>
            <li>Logging In</li>
            <li>Profile Help</li>
            <li>Account settings</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="card">
          <h2>Plan Help</h2>
          <ul>
            <li>Available plans</li>
            <li>Plan settings</li>
            <li>Premium Family & Kids</li>
            <li>Premium Duo</li>
          </ul>
        </div>

        <div className="card">
          <h2>App Help</h2>
          <ul>
            <li>Getting started</li>
            <li>App settings</li>
            <li>Troubleshooting</li>
            <li>Playlists</li>
            <li>Features</li>
            <li>Social features</li>
          </ul>
        </div>
        <div className="card">
          <h2>Device Help</h2>
          <ul>
            <li>Speakers</li>
            <li>Smart watches</li>
            <li>TVs</li>
            <li>Gaming</li>
            <li>Cars</li>
          </ul>
        </div>
        <div className="card">
          <h2>Data & Privacy</h2>
          <ul>
            <li>Listening privacy</li>
            <li>Data and privacy info</li>
          </ul>
        </div>
      </div>

      <div className="contact">
        <h2>Visit our Office</h2>

        <p>Sooundify USA Inc</p>
        <div className="address">
          <h5><BsMap className="icons" />Adress:</h5>
          <p>150 Madison Street, 20nd floor , New York, NY 10007, USA</p>
          <h5><AiOutlineMail className="icons"/>Email:</h5>
       
          <p>office@soundify.com</p>

          <h5><GiSmartphone className="icons" />Tel:</h5>
          <p>+(907) 345 345 67</p>
        </div>
      </div>
    </div>
  );
}
