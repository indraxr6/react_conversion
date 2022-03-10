import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Bank"

import BMI from "./pages/BMI"
import Bank from "./pages/Bank"
import PPN from "./pages/PPN"

import Binary from "./pages/Binary"
import Decimal from "./pages/Decimal"
import Hexadecimal from "./pages/Hexadecimal"
import Octal from "./pages/Octal"



class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/bmi" component={BMI} />
                <Route path="/bank" component={Bank} />
                <Route path="/ppn" component={PPN} />
                <Route path="/binary" component={Binary} />

                <Route path="/binary" component={Binary} />
                <Route path="/decimal" component={Decimal} />
                <Route path="/hexa" component={Hexadecimal} />
                <Route path="/octal" component={Octal} />

            </Switch>
        )
    }
}
export default Main;
