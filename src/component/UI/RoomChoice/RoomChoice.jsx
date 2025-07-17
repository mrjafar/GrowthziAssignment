import React from 'react'
import './RoomChoice.css'
import { SlArrowRight } from 'react-icons/sl';
import air from '../../../assets/air-conditioner.png';;
import wifi from '../../../assets/free-wifi.png';
import bathtub from '../../../assets/bathtub.png';
import bed from '../../../assets/double-bed.png';
const RoomChoice = () => {
    return (
        <section className='room-choice'>
            <p className='line'>|</p>
            <p className='room-p'>our room choices</p>
            <h3 className='room-heading'>Luxury Rooms & Suits</h3>
            <div className="room-choices">
                <div className="room-suite-container">
                    <div className="superior-suite suite">
                        <h4 className='suit-heading'>Superior Suite</h4>
                        <p className='suit-price'>$300/Night</p>
                        <hr />
                        <div className="btn-icons">
                            <button className='book-now-btn'>
                                Book Now
                                <SlArrowRight className='arrow' />
                            </button>
                            <div className="btn-icons">
                                <img src={bed} alt="" />
                                <img src={bathtub} alt="" />
                                <img src={air} alt="" />
                                <img src={wifi} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="junior-suite suite">
                        <h4 className='suit-heading'>Superior Suite</h4>
                        <p className='suit-price'>$270/Night</p>
                        <hr />
                    </div>
                </div>
                <div className="rooms">
                    <div className="room">
                        <h4>Deluxe Room</h4>
                        <p>$210/Night</p>
                        <hr />
                    </div>
                    <div className="room">
                        <h4>Double Room</h4>
                        <p>$180/Night</p>
                        <hr />
                    </div>
                    <div className="room">
                        <h4>Family Room</h4>
                        <p>$150/Night</p>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoomChoice
