import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Bank"

import BMI from "./pages/BMI"
import Bank from "./pages/Bank"
import PPN from "./pages/PPN"
import Binary from "./pages/Binary"


class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/bmi" component={BMI} />
                <Route path="/bank" component={Bank} />
                <Route path="/ppn" component={PPN} />
                <Route path="/binary" component={Binary} />
            </Switch>
        )
    }
}
export default Main;
