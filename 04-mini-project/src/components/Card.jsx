import React from 'react'

const Card = (props) => {

  return (
     <div className="card">
          <div className="top">
            <div className="logo">
              <img src={props.brandLogo} alt={props.companyName} />
            </div>
            <div className="btn">
              <button>save <span><i className="ri-bookmark-line"></i></span></button>
            </div>
          </div>
          <div className="center">
            <h3>{props.companyName} <span>{props.posted}</span></h3>
            <h2>{props.post}</h2>
            <div className="tags">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <h3>{props.pay}</h3>
              <h5>{props.location}</h5>
            </div>
            <div className="right">
              <button>Apply Now</button>
            </div>
          </div>

        </div>
  )
}

export default Card
