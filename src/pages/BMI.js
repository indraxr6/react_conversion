import React, { Component } from 'react';
import Alert from '../Components/Alert';

class BMI extends Component {
                
    calc = () => {
        let mass = this.state.mass;
        let height = this.state.height;
        let bmi = (mass / ((height * height) / 10000)).toFixed(2);
        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
            console.log("Underweight");
            console.log(bmi);
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal";
            console.log("Normal");
            console.log(bmi);
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
            console.log("Overweight");
            console.log(bmi);
        }
        else if (bmi >= 30) {
            category = "Obese";
            console.log("Obese");
            console.log(bmi);
        }

        this.setState({
            bmi,
            category
        });
    }

    changeMass = (event) => {
        this.setState({
            mass: event.target.value
        });
    }
    changeHeight = (event) => {
        this.setState({
            height: event.target.value
        });
    }
      //input type number calculate BMI
      constructor() {
        super();
        this.state = {
            height: "",
            mass: "", 
            bmi: "",
            category: ""
        }
      }

    //category
    Alert = () => {
        if (this.state.category === "") {
            return <div></div>;
        }
        if (this.state.category === "Underweight") {
            return <Alert type="info" header="Underweight" >
                <p>Less weight, Underweight</p>
            </Alert>

        }
        if (this.state.category === "Normal") {
            return <Alert type="success" header="Normal">
                <p>Healthy weight (Normal)</p>
            </Alert>
        }
        if (this.state.category === "Overweight") {
            return <Alert type="warning" header="Overweight">
                <p>At risk of overweight</p>
            </Alert>
        }
        if (this.state.category === "Obese") {
            return <Alert type="danger" header="Obese">
                <p>Obese (Bruh)</p>
            </Alert>
        }
    }

    render() {
        return (
            
            <div className="container col-md-3">
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h3>Body Mass Index Calculator</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Mass :</label>
                            <input type="number" className="form-control" onChange={this.changeMass} />
                        </div>
                        <div className="form-group">
                            <label>Height :</label>
                            <input type="number" className="form-control" onChange={this.changeHeight} />
                        </div>
                        <br></br>

                        <div className="form-group">
                            <button className="btn btn-success form-control mb-2" onClick={this.calc}>Calculate</button>
                        </div>
                        
                      
                        {this.Alert()}

                      
                    </div>
                </div>
            </div>
        );
    }
}

export default BMI;