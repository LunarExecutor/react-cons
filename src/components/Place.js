import { useState } from "react";
import data from '../json/data.json'

const Place = () => {

    const [selectedImage, setSelectImage] = useState(data.Places[0].imageUrl);


    return <section className="Place section" id="Place">
        <div className="Place__container container">
          <h2 className="section__title">
          Contact Our Team Today<br />
          To Begin Your Project
          </h2>

          <div className="Place__content grid">
            <div className="Place__images">
              <img
                src={selectedImage}
                alt=""
                className="Place__img-big"
              />
              
              <div className="Place__img-smalls">
                {data.Places.map((Place, index) => {
                    return <img
                    key={index}
                    src={Place.imageUrl}
                    alt=""
                    onClick= {() => setSelectImage(Place.imageUrl)}
                    className= {`Place__img-small ${selectedImage === Place.imageUrl ? 'active' : ''}`}
                  />
                

                })}
                
                
              </div>
            </div>

            <div className="Place__data">
              <h2 className="Place__title">Your Trusted Partner in Construction</h2>
              <p className="Place__description">
              we are committed to providing top-quality construction services<br />
               and solutions to meet your project need.
              </p>
            </div>
          </div>
        </div>
      </section>

}

export default Place;