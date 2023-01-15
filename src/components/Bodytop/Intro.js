import React from 'react'
import './intro.css'

export default function Intro() {
    return (
        <>
            <div data-v-6c9b1080="" className="flex justify-center flex-col items-center"><p data-v-6c9b1080="" className="start-today lg:px-12 pad-x lg:text-5xl md:text-4xl text-xl leading-tight font-semibold text-center">
                Start selling <span data-v-6c9b1080="" className="text-primary-cyan">today</span><br />
                with superfast deliveries.</p>
                <p className="delight mt-2 md:text-base text-sm font-medium text-if-gray text-center">
                    Delight your customers with
                    <span data-v-6c9b1080="" className="text-primary-cyan"> unparalleled fulfilment experience </span>
                    while growing your business
                </p> <div data-v-6c9b1080="" className="md:pt-12 pt-7"><img data-v-6c9b1080="" src={`icons/blowhornmap.png`} alt="Integrated Fulfilment Dashboard" className="md:relative rounded-2xl md:z-10 z-0" width="871" height="403.06" /></div></div>

            <div data-v-10c7eaf7="" className="hero-section xl:top-8 lg:top-16 hidden md:block"><p data-v-10c7eaf7="" className="focus xl:pt-16 pt-8 md:px-16 lg:px-32 xl:px-72 px-4 md:text-4xl text-xl font-semibold md:text-center text-black">
                While you focus on products, we will guarantee <br />the
                <span data-v-10c7eaf7="" className="text-primary-cyan"> best-in-class </span> fulfilment
                experience
            </p></div>

        </>
    )
}
