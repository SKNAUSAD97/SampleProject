import React, { Component } from "react";

class Testimonials extends Component{
    render(){
        return(
            <>
    <div className="slider">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Read Our Customer Testimonials</h2>
                    <p className="p-heading">Our clients are our partners and we can not imagine a better future for our company without helping them reach their objectives</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">

                    <div className="slider-container">
                        <div className="swiper-container card-slider">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-1.jpg"  />
                                        <div className="card-body">
                                            <div className="testimonial-text">The guys from Aria helped with getting my business off the ground and turning into a profitable company.</div>
                                            <div className="testimonial-author">Jude Thorn - Founder</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-2.jpg"  />
                                        <div className="card-body">
                                            <div className="testimonial-text">I purchased the Growth Accelerator service pack a few years ago and I renewed the contract each year. </div>
                                            <div className="testimonial-author">Marsha Singer - Marketer</div>
                                        </div>
                                    </div>        
                                </div> 
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-3.jpg"  />
                                        <div className="card-body">
                                            <div className="testimonial-text">Aria's CEO personally attends client meetings and gives his feedback on business growth strategies.</div>
                                            <div className="testimonial-author">Roy Smith - Developer</div>
                                        </div>
                                    </div>        
                                </div> 
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-4.jpg" />
                                        <div className="card-body">
                                            <div className="testimonial-text">At the beginning I thought the prices are a little high for what they offer but they over deliver each and every time.</div>
                                            <div className="testimonial-author">Ronald Spice - Owner</div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-5.jpg" />
                                        <div className="card-body">
                                            <div className="testimonial-text">I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</div>
                                            <div className="testimonial-author">Lindsay Rune - Manager</div>
                                        </div>
                                    </div>        
                                </div> 
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-6.jpg" />
                                        <div className="card-body">
                                            <div className="testimonial-text">My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</div>
                                            <div className="testimonial-author">Ann Black - Consultant</div>
                                        </div>
                                    </div>        
                                </div> 
                            </div> 
        
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
        
                        </div> 
                    </div> 
                    

                </div> 
            </div> 
        </div> 
    </div> 
            </>
        );
    };
}

export default Testimonials;