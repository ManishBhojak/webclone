import React from 'react'
import './footer.css'
import 'remixicon/fonts/remixicon.css';
import 'boxicons/css/boxicons.min.css';
export default function Footer() {
    return (
        <>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        <img src={`icons/7c6c684.png`} width="128" height="33.22" alt="logo" />
                    </a>
                    <p className="text">Same day delivery for your brand</p>
                    <p className="heading1 text-muted">Write to us</p>
                    <div className="reach">
                        <p><i className="ri-mail-line"></i>shoutout@blowhorn.com</p>
                        <p><i className="ri-phone-line"></i>080 45683500</p>
                    </div>
                    <p className="heading1 text-muted">Follow us</p>
                    <a href="/" className='card-link' ><img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg==" alt="twitter" /></a>
                    <a href="/" className='card-link' ><img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvllWENwjAQhb8pAAk4AAeAA1AAEnCCBXAACgAHSEACKIC85Eqabg0s1y0h3K82ub5vd++6VnQcVcf69A44A1NnVdKYB420gqdTvKabAzyAg2UvgEFL8Fs3B9gDaxPdAaufA9yTFg1LVyAPriY6MQ8uth8BAsqjGyCPxskHfPRAYjM7FEY3HJI3EleVITbANtq7ALluCRimzQVQe06AWreMvIovqQug1gmgOJoHWncCaPJKsGIV/DFAIxdfNE2OTFRorQlSNOV95UHLP0MtPWtyiQcnNr7/J9Pbmnyviiub4As/E0wZX0UvUwAAAABJRU5ErkJggg==" alt="linkedin" /></a>
                    <a href="/" className='card-link' ><img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUxJREFUSEu1lYFNwzAQRV8nYATKBMAE7QgwAXQCYALoBLQTABMAGzAC3QA2gAlAP7Ktw7V9DlJOsiIl9r3z+ftnxsQxmzg/PYBLYAGchKGa3sN4AV5bRbYAZ8A9MHd2+QHcAILtRQ2wAa5Gtk9rBPoTJcB/ksekW+DaEnKA2vLcqPwzJLDtuANuzZpz264coH4eVgDf4ZA1x0YO0PejOMECpJaHRvVPgObEWAZ16alhI+3CAh6BiwZgDahahdfKVIwFSNvHnYC8Lfky5TrVSwv4cWRpd+ABUu4egHfb38JZ5PUN6+zimoI8wBdwkGXfRVvpOWQPUGpt8ZA9mY45gxUgVe65aeui9QJ025NBjrGKXkDTKrSrmtn1AFyzi2Io3WoPkFvJkMv74Wg30fxqgJLDJtV6EtREqUtmpgs1KKPyrmgEPQDHQdqfJwf8ArJlSRlOmzLXAAAAAElFTkSuQmCC" alt="facebook" /></a>
                    <a href="/" className='card-link' ><img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEvNlU0yBEEQhb+5gZUtToATYGOLA4jgBm6AEwg7O5zAWFrhBDgB4QJ+LkB8olLUVJTumkXHyIiKmumuypf5MvP1iIFtNLB/ZgawCBwCK2l1JfoIuE7TPnG2lsEecJ5O3QPvtYvpvQHMAWvp/z5wkSOUAF54AHS8nZy3lMmMx8AysJoHVAKIrmMvGHmf7QLHwAewAzwDl4As/FgJ8AK41iueBTZCTc6vgU3gBngFFoC7tC/9BfCVinWQAcjxbaXYOjsDPoH5FLnPrMdv4GUGApjyUQZgtFJm2vKsmY10Wq+N7OzUADq6SvyG8/AX3Sb38W5qADNxHmrtLHVvRcb/D2BwiqIlbUE5tzU1f58AT0VLN1GkppRt6sWYgShybdp7AfoGTSmJrMqu8rkAtrSrOsn29hbgJLZIRT7wOu2VihA7I1EZzajFdO68eL9T7KKAIdcCdcl1aFbsvXId0RqJhfaiHdRlKqmBOJTKyoTN7JPZwnvTmcEz+AZJz2cZU1H38wAAAABJRU5ErkJggg==" alt="instagram" /></a>
                    <a href="/" className='card-link' ><img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOhJREFUSEvtleERATEQhb+rgA7ogA5QAR3QAR1QAhWgAypAB3RwJVAB80hm4obbOO6HmctMfuXt+7KbTZJQ8khK9qcCmBXOlqgLjIG6m23T4SHYO10KLICjjwsBMt9FGlqynoeGgA3QtyIj17fAQNoQoDQ7kQaW7ACoIk+AqxGltFdAw3J36/fNhxlYAK+dAROgZoAKA+SrLpsDwxzI14Cpy+QdozBA5ZG5ssgbHwN0yEugGXHIF7+B8JB1+1oRwTGSl236y4u2BkbZNi39qRBQEJF9nWNv9gk4u6n29Y9f9eHYDfX/f/INbvUiGfj4dkgAAAAASUVORK5CYII=" alt="youtube" /></a>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h5>Our Solution</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Integrated Fulfilment</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">HyperLocal</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Transportation</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Company</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Our Story</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Press</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">People & Values</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Join Us</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Contact Us</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQ</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Get the Blowhorn App</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Blog</a></li>
                        <li className="nav-item mb-2"><a href="/" className="system nav-link p-0 text-muted">System Status</a></li>
                    </ul>
                </div>
            </footer>
            <div className="flex-sm-row border-top d-flex flex-column justify-content-between">
                    <p>Copyright 2023 © Blowhorn. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="/">Terms of Use</a></li>
                        <li className="ms-3"><a className="link-dark" href="/">Privacy Policy</a></li>
                    </ul>
                </div>
        </>
    )
}
