import React, { Component } from "react";
import HTMLFlipBook from "react-pageflip";


import Image from "./assets/images/NewsLetter/00.png";
import Image1 from "./assets/images/NewsLetter/01.png";
import Image2 from "./assets/images/NewsLetter/02.png";
import Image3 from "./assets/images/NewsLetter/03.png";
import Image4 from "./assets/images/NewsLetter/04.png";
import Image5 from "./assets/images/NewsLetter/05.png";
import Image6 from "./assets/images/NewsLetter/06.png";
import Image7 from "./assets/images/NewsLetter/07.png";
import Image8 from "./assets/images/NewsLetter/08.png";
import Image9 from "./assets/images/NewsLetter/09.png";
import Image10 from "./assets/images/NewsLetter/10.png";
import Image11 from "./assets/images/NewsLetter/11.png";
import Image12 from "./assets/images/NewsLetter/12.png";
import Image13 from "./assets/images/NewsLetter/13.png";
import Image14 from "./assets/images/NewsLetter/14.png";
import Image15 from "./assets/images/NewsLetter/15.png";
import Image16 from "./assets/images/NewsLetter/16.png";
import Image17 from "./assets/images/NewsLetter/17.png";
import Image18 from "./assets/images/NewsLetter/18.png";


export default class FlipBook extends Component {
  render() {
    const transparentLinkStyle = {
      padding: '10px',
      backgroundColor: 'transparent',
      color: 'white',
      borderRadius: '5px',
      border: '1px solid white',
      opacity: '0.5',
      textDecoration: 'none'
    };
    const linkContainerStyle = {
      position: 'absolute',
      bottom: '10px',
      right: '114px'
    };

    return (
      <>
        <HTMLFlipBook width={422} height={601}>
          <div className="">
            <img src={Image} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image1} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image2} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image3} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image4} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image5} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image6} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image7} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image8} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image9} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image10} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image11} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image12} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image13} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image14} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image15} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image16} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image17} width="422" height="601" alt="" />
            <div style={Object.assign({}, linkContainerStyle, { right: '114px' })}>
              <a href="https://casainteligente.santa-ana.edu.ar/wp" style={transparentLinkStyle} target="_blank" rel="noopener noreferrer">
                Tu enlace
              </a>
            </div>
          </div>
          <div className="">
            <img src={Image18} width="422" height="601" alt="" />
          </div>
        </HTMLFlipBook>
      </>
    );
  }
}
