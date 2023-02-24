import React from 'react'
import './Poster.css';

const Poster = (props) => {
  return (
    <div className='poster' style={{ backgroundImage: `url(${props.bg})` }}>
      <div className='posterDiv'>

        <div className='posterLiftDiv'>
          <div className='moviTitle'>
            <div className='moviPoster'>
              <img src={props.hoding} />
            </div>


            <div className='moviName'>
              <h1>{props.moviName}</h1>
              <h3>{props.year}, {props.director}</h3>
              <div>
                <p id='time'>{props.time}</p>
                <p id='movitype'>{props.type}</p>
              </div>
            </div>
          </div>


          <div className='discription'>{props.details}</div>
          <div className='iconDiv'>
          <i class="fa fa-share-alt" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-comment" aria-hidden="true"></i>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Poster;

{/* <div className='moviName'></div> */ }
