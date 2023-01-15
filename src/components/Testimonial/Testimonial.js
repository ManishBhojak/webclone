import React from 'react'
import './testimonial.css'
export default function Testimonial() {
    return (
        <>
            <div className="container-fluid">
                <p className='title mx-2 py-2'>Testimonial</p>
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">"Seamless one day delivery"</h5>
                                <p className="card-para">"Blowhorn has seamless one day delivery in Mumbai and Pune, are very responsive to calls and queries and I am happy to be associated with them as my delivery partner"</p>
                                <a href="/" className="card-link">Devendra Chawla<br />Founder</a>
                                <a href="/" className="card-link"><img className="logo" src="https://docs.blowhorn.com/Logo_New_0976fecbb4.png" width="130" height="30" alt="company-logo" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">"No better option in the market than Blowhorn"</h5>

                                <p className="card-para">"To provide same day delivery to our customers in metro cities, there is no better option in the market than Blowhorn."</p>
                                <a href="/" className="card-link">Mukesh Regar<br />Warehouse & Distribution Manager</a>
                                <a href="/" className="card-link"><img src="https://docs.blowhorn.com/Byus_logo_91ff5e350d.png" width="100" height="30" alt="company-logo" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">"Absolutely Seamless"</h5>
                                <p className="card-para">"Over the last year Blowhorn and its experienced team of Logisticians and customer care experts have helped us in executing our last mile delivery of non perishable gifts with aplomb. The" <strong>"process so far has been absolutely seamless where Blowhorn team has taken full ownership"</strong>"of each and every gift order handed over to them for delivery"</p>
                                <a href='/' className="card-link">Gaurav Arora<br />Vice President</a>
                                <a href='/' className="card-link"><img src="https://docs.blowhorn.com/new_fnplogo_254e8584cb.png" width="100" height="30" alt="company-logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact container-fluid'>
                <p className="contact-text">Get in touch with our experts today to grow your business</p>
                <div className="flex justify-center"><a href="/contact-us" className="button flex items-center px-4 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full"><span className="mr-2">Contact Us</span> </a></div>
            </div>

        </>
    )
}
