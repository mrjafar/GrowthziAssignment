import React, { useState } from 'react'
import './Services.css';
import gym from '../../../assets/gym.png';
import spa from '../../../assets/spa.png';
import breakfast from '../../../assets/breakfast.png';
import pool from '../../../assets/pool.png';
import { SlArrowRight } from 'react-icons/sl';
import { FaEdit } from 'react-icons/fa';
import Modal from 'react-modal';
import { RxCross2 } from 'react-icons/rx';


const ServicesSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [h1Text, setH1Text] = useState("Amenities That You Can Enjoy")
    const services = [
        {
            icon: gym,
            title: "Workout & Yoga Rooms",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            btn: "Discover More"
        },
        {
            icon: spa,
            title: "Spa, Massage & Sauna",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            btn: "Discover More"
        },
        {
            icon: breakfast,
            title: "Multiple Cuisines & Beverages",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            btn: "Discover More"
        },
        {
            icon: pool,
            title: "In Door Swimming Pool",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            btn: "Discover More"
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
    }
    return (
        <section className='services-section'>
            <p className='line'>|</p>
            <h3>introducing our services</h3>
            <div className='service-title'>
                <div className="editable-heading">
                    <h1>
                        {h1Text}
                    </h1>
                    <FaEdit
                        className='service-edit-icon'
                        onClick={() => setIsModalOpen(true)}
                        title="Edit heading"
                    />
                </div>
                {isModalOpen && (
                    <Modal
                        isOpen={isModalOpen}
                        className="custom-modal"
                        overlayClassName="custom-overlay"
                    >
                        <RxCross2 className='close-icon' onClick={() => setIsModalOpen(false)}/>
                        <form onSubmit={handleSubmit}>
                            <label>Edit Heading</label>
                            <input
                                type="text"
                                value={h1Text}
                                onChange={(e) => setH1Text(e.target.value)}
                                className='edit-heading-input'
                            />
                            <button type='submit' className='save-btn'>Save</button>
                        </form>
                    </Modal>

                )}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
            </div>
            <div className="services-cards">
                {services?.map((service, index) => {
                    const { icon, title, description, btn } = service;
                    const isEven = index % 2 === 0;

                    return (
                        <div className="service-row" key={title}>
                            {isEven ? (
                                <>
                                    <div className="blank"></div>
                                    <div className="service-card even">
                                        <figure>
                                            <img src={icon} alt={title} />
                                        </figure>
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <button>{btn}<SlArrowRight className="discover-icon" /></button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="service-card odd">
                                        <figure>
                                            <img src={icon} alt={title} />
                                        </figure>
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <button>{btn}<SlArrowRight className="discover-icon" /></button>
                                    </div>
                                    <div className="blank"></div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

        </section>
    )
}

export default ServicesSection;
