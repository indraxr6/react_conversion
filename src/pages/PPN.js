import React, {Component} from "react";

class Harga extends Component {
    constructor() {
        super();
        this.state = {
            startVal: 0,
            tax: 0,
            disc: 0,
            finalVal: 0
        }
    }

    Hitung = () => {
        let startVal = this.state.startVal;
        let tax = this.state.tax;
        let disc = this.state.disc;
        let finalVal = ((startVal - ((disc / 100) * startVal)) + ((tax) / 100) * startVal);
        this.setState({
            finalVal
        });
    }

    changestartVal = (event) => {
        this.setState({
            startVal: event.target.value
        });
    }

    changeTax = (event) => {
        this.setState({
            tax: event.target.value
        });
    }

    changeDisc = (event) => {
        this.setState({
            disc: event.target.value
        });
    }

    render() {
        return (
            <div className="container col-md-3">
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h3>PPN</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Starting value</label>
                            <input type="number" className="form-control" onChange={this.changestartVal}></input>
                        </div>
                        <div className="form-group">
                            <label>Tax</label>
                            <input type="number" className="form-control" onChange={this.changeTax}></input>
                        </div>
                        <div className="form-group">
                            <label>Discount</label>
                            <input type="number" className="form-control" onChange={this.changeDisc}></input>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-success form-control" onClick={this.Hitung}>Hitung</button>
                        </div>
                        <h5 className="p-3 form-control text-center">Rp.{this.state.finalVal},00</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Harga;