import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Image } from "antd";
import Img1 from "../images/gallery/1.JPG";
import Img2 from "../images/gallery/2.JPG";
import Img3 from "../images/gallery/3.JPG";
import Img4 from "../images/gallery/4.JPG";
import Img5 from "../images/gallery/5.JPG";
import Img6 from "../images/gallery/6.JPG";
import Img7 from "../images/gallery/7.JPG";
import Img8 from "../images/gallery/8.JPG";
import Img9 from "../images/gallery/9.JPG";
import Img10 from "../images/gallery/10.JPG";
import Img11 from "../images/gallery/11.JPG";
import Img12 from "../images/gallery/12.JPG";
import Img13 from "../images/gallery/13.JPG";
import Img14 from "../images/gallery/14.JPG";
import Img15 from "../images/gallery/15.JPG";
import Img16 from "../images/gallery/16.JPG";
import Img17 from "../images/gallery/17.JPG";
import Img18 from "../images/gallery/18.JPG";
import Img19 from "../images/gallery/19.JPG";
import Img20 from "../images/gallery/20.JPG";
import Img21 from "../images/gallery/21.JPG";
import Img22 from "../images/gallery/22.JPG";

function Gallery() {
  const [visible, setVisible] = useState(false);
  const numbers = [
    { id: 1, url: Img1 },
    { id: 2, url: Img2 },
    { id: 3, url: Img3 },
    { id: 4, url: Img4 },
    { id: 5, url: Img5 },
    { id: 6, url: Img6 },
    { id: 7, url: Img7 },
    { id: 8, url: Img8 },
    { id: 9, url: Img9 },
    { id: 10, url: Img10 },
    { id: 11, url: Img11 },
    { id: 12, url: Img12 },
    { id: 13, url: Img13 },
    { id: 14, url: Img14 },
    { id: 15, url: Img15 },
    { id: 16, url: Img16 },
    { id: 17, url: Img17 },
    { id: 18, url: Img18 },
    { id: 19, url: Img19 },
    { id: 20, url: Img20 },
    { id: 21, url: Img21 },
    { id: 22, url: Img22 },
  ];
  const listItems = numbers.map((number) => (
    <div className="col-sm-4 mb-4" key={number.id}>
      <Image src={number.url} />
    </div>
  ));
  return (
    <>
      <Header />
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Gallery</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="bread-crumb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span> / </span>
                </li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="Gallery_section">
        <div className="container">
          <div className="row">
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              {listItems}
            </Image.PreviewGroup>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
