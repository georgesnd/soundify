import React from "react";
import "./styles/LeftMenu.css";
import logo from "../Assets/logo3.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Container, Form, FormControl } from "react-bootstrap";
import Menu from "./Menu";
import { MenuList } from "./MenuList";
import MenuPlaylist from "./MenuPlaylist";
import Tracklist from "./Tracklist";

export default function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
     
        <p>
        <img className="logoImg" src={logo} alt="" />
          Soundify
        </p>
        <BiDotsHorizontalRounded className="icons" />
      </div>
      <div className="searchBox">
      <Container className="search1">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>
      </div>
      <Menu  menuObject={MenuList}/>
      <MenuPlaylist />
      <Tracklist />
    </div>
  );
}
