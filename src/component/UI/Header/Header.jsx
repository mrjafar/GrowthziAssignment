import React, { useState } from 'react'
import './Header.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useLocation } from 'react-router';
import { FaEdit } from 'react-icons/fa';
import Modal from 'react-modal';
import { RxCross2 } from 'react-icons/rx';

const Header = () => {
    const [room, setRoom] = useState("1");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buttonColor, setButtonColor] = useState("transparent");
    const [btnSize, setBtnSize] = useState("medium");
    const [pastedUrl, setPastedUrl] = useState("");
    const [btnValue, setBtnValue] = useState("Discover Rooms");

    const location = useLocation();


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        setBtnSize(btnSize);
        setPastedUrl(pastedUrl);

        console.log(btnSize);
        console.log(buttonColor);
    }

    return (
        <section className='header'>
            {location.pathname === "/services" ? (
                <>
                    <p className='sp'>|</p>
                    <h3 className='s-sub-heading'>our services</h3>
                    <h1 className='s-heading'>Introducing Our
                        Best Services</h1>
                </>
            ) : (
                <>
                    <p>|</p>
                    <h3>best place to relax & enjoy</h3>
                    <h1>A Luxurious Way To
                        Enjoy Your Life</h1>
                    <button
                        className={`discover-btn ${btnSize} ${buttonColor}`}
                        data-color={buttonColor}
                        style={{ backgroundColor: buttonColor }}
                    >
                        <a href={pastedUrl} target="_blank" rel="noopener noreferrer" className='discover-link'>
                            {btnValue}
                        </a>
                        <FaEdit className='edit-icon' onClick={() => setIsModalOpen(true)} />
                    </button>
                    {isModalOpen && (

                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                            contentLabel="Edit Preferences Modal"
                            className="custom-modal"
                            overlayClassName="custom-overlay"
                        >
                            <form onSubmit={handleSubmit}>
                                <RxCross2 onClick={() => setIsModalOpen(false)} className='close-icon' />
                                {/* <h2>Edit Button As You Want</h2> */}

                                <div className="link-input">
                                    <div>
                                        <label>Link button to page or URL</label>
                                        <p>you can link the button to a page or URL.</p>
                                    </div>
                                    <div>
                                        <input type="text" value={pastedUrl} onChange={(e) => setPastedUrl(e.target.value)} placeholder='Page or URL' />
                                    </div>
                                </div>
                                <div className='btn-input'>
                                    <div className='btn-labels'>
                                        <label>Button Text:</label>
                                        <p>Add call to action of button ie. name</p>
                                    </div>
                                    <div className='btn-input-div'>
                                        <input type="text" value={btnValue} onChange={(e) => setBtnValue(e.target.value)} />
                                    </div>
                                </div>
                                <div className="btn-input">
                                    <div className='btn-labels'>
                                        <label>Color:</label>
                                        <p>Choose a color for the button</p>
                                    </div>
                                    <div className='btn-input-div'>
                                        <input type="color" value={buttonColor} onChange={(e) => setButtonColor(e.target.value)} />
                                    </div>
                                </div>
                                <div className="btn-input">
                                    <div className='btn-labels'>
                                        <label>Button Size:</label>
                                        <p>Size of button</p>
                                    </div>
                                    <div className='btn-input-div'>
                                        <select value={btnSize} onChange={(e) => setBtnSize(e.target.value)} name="fontSize">
                                            <option value="sm">Small</option>
                                            <option value="md">Medium</option>
                                            <option value="lg">Large</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className='save-btn'>Save</button>
                                <button
                                    type="button"
                                    className='delete-btn'
                                    onClick={() => {
                                        setBtnValue("Discover Rooms");
                                        setButtonColor("transparent");
                                        setBtnSize("md");
                                        setPastedUrl("");
                                        setIsModalOpen(false);
                                    }}
                                >
                                    Reset
                                </button>

                            </form>
                        </Modal>
                    )}
                    <div className="left-right-icons">
                        <SlArrowLeft className='left-icon' />
                        {/* <IoIosArrowDropright /> */}
                        <SlArrowRight className='right-icon' />
                    </div>
                    <div className="bottom-card">
                        <div className="check">
                            <h4>Check In</h4>
                            <input type="date" />
                        </div>
                        <div className="check">
                            <h4>Check Out</h4>
                            <input type="date" />
                        </div>
                        <div className="check">
                            <h4>Room</h4>
                            <select value={room} onChange={(e) => setRoom(e.target.value)} name="room">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <button className='check-btn'>Check Availability <SlArrowRight className="btn-arrow" /></button>
                    </div>
                </>
            )
            }
        </section >
    )
}

export default Header
