import React, { useState } from 'react'
import { features } from './data'
import './Features.css'
const Features = () => {
  const [items] = useState(features);
  return (
    <>
      <section className="features" id='features'>
        <br /><br /><br /><br />
        <h2>Special Features</h2>

        {/* --------- Features Containers --------- */}
        {
          items.map((e)=> {
            const { name, image, description } = e
            return (
              <div className="feature-container">
                <div className="feature-image">
                  <img src= {image} alt="" />
                </div>
                <div className="feature-text">
                  <div className="feature-text-center">
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            )
          })
        }

      </section>

    </>
  )
}

export default Features