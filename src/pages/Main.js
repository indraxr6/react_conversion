import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home"

import Bank from "./pages/Bank"
import Binary from "./pages/Binary"
import BMI from "./pages/BMI"
import PPN from "./pages/PPN"


class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bmi" component={Bank} />
                <Route path="/bank" component={Binary} />
                <Route path="/ppn" component={BMI} />
                <Route path="/binary" component={PPN} />


            </Switch>
        )
    }
}
export default Main;
