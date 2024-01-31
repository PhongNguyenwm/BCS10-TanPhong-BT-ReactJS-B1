import React, { Component } from "react";
import Navbar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}
