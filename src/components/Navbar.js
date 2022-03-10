import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-primary navbar-light">
                <a className="navbar-brand text-white" href="#">
                    Conversion App
                </a>

                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/bank" className="nav-link text-white">
                                Bank
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bmi" className="nav-link text-white">
                                BMI
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ppn" className="nav-link text-white">
                                PPN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/binary" className="nav-link text-white">
                                Binary
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/decimal" className="nav-link text-white">
                                Decimal
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hexa" className="nav-link text-white">
                                Hexadecimal
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/octal" className="nav-link text-white">
                                Octal
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;
