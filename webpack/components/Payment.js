import React from 'react'
import { Link } from 'react-router'

class Payment extends React.Component {
    constructor(props){
        super(props)
        // this.submitOrder = this.submitOrder.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleStreetChange = this.handleStreetChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handleZipChange = this.handleZipChange.bind(this)
        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.notSameAddress = this.notSameAddress.bind(this)
        this.state = {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            street_ship: '',
            city_ship: '',
            state_ship: '',
            zip_code_ship: '',
            country_ship: 'US',
            useSameAddress: 'yes',
            cart: {
                total: 0
            }
        }
    }
    componentWillMount() {
        fetch('/view_cart?token=' + sessionStorage.getItem('cart_token'))
        .then(response => response.json())
        .then(response => this.setState({cart: response}))
    }
    handle(event) {
        var updatedState = {}
        updatedState[event.target.name] = event.target.value
        this.setState(updatedState)
    }
    handleFirstNameChange(event) {
        this.setState({
            first_name: event.target.value
        })
    }
    handleLastNameChange(event) {
        this.setState({
            last_name: event.target.value
        })
    }
    handlePhoneChange(event) {
        this.setState({
            phone_number: event.target.value
        })
    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }
    handleStreetChange(event) {
        this.setState({
            street_ship: event.target.value
        })
    }
    handleCityChange(event) {
        this.setState({
            city_ship: event.target.value
        })
    }
    handleStateChange(event) {
        this.setState({
            state_ship: event.target.value
        })
    }
    handleZipChange(event) {
        this.setState({
            zip_code_ship: event.target.value
        })
    }
    handleCountryChange(event) {
        this.setState({
            country_ship: event.target.value
        })
    }
    notSameAddress(event) {
        this.setState({
            useSameAddress: 'no'
        })
    }
    // submitOrder(e) {
    //     e.preventDefault()
    //     console.log('made it here')
    //     fetch('/api/charges', {
    //         body: {
    //             first_name: this.state.first_name,
    //         },
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }

    render(){
        return (
            <form method="POST" action="/charges">
                <div className="container">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <h2>CHECKOUT PAGE</h2>
                        </div>
                    </div>

                    <div id="card_errors"></div>

                    <div className="form-group">
                        <div className="panel panel-info text-center">
                            <div className="panel-heading">
                                <h3 className="text-left">Contacts</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row form-inline text-left">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="first_name">First Name &nbsp;<i className="fa fa-user" aria-hidden="true"></i></label>
                                            <input type="text" id="first_name" name="first_name" className="form-control" placeholder="First Name" maxLength="50" value={this.state.first_name} onChange={this.handleFirstNameChange} required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="first_name">Last Name &nbsp;<i className="fa fa-user" aria-hidden="true"></i></label>
                                            <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Last Name" maxLength="50" value={this.state.last_name} onChange={this.handleLastNameChange} required />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row form-inline text-left">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number &nbsp;<i className="fa fa-phone" aria-hidden="true"></i></label>
                                            <input type="text" id="phone" name="phone" className="form-control" placeholder="(xxx)-(xxx)-(xxxx)" maxLength="10" value={this.state.phone_number} onChange={this.handlePhoneChange} required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email &nbsp;<i className="fa fa-envelope" aria-hidden="true"></i></label>
                                            <input type="text" id="email" name="email" className="form-control" placeholder="Ex. joe@example.com" maxLength="50" value={this.state.email} onChange={this.handleEmailChange} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="panel panel-success text-left">
                            <div className="panel-heading">
                                <h3>Shipping</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="street_name">Street &nbsp;<i className="fa fa-road" aria-hidden="true"></i></label>
                                            <input type="text" id="street_name" name="street_name" className="form-control" placeholder="Ex. 123 Marberry Ln." value={this.state.street_ship} onChange={this.handleStreetChange} maxLength="50" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="city_name">City</label>
                                            <input type="text" id="city_name" name="city_name" className="form-control" placeholder="Ex. Gumdropsville" value={this.state.city_ship} onChange={this.handleCityChange} maxLength="50" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="state">State</label>
                                            <select className="form-control" name="state" id="state" value={this.state.state_ship} onChange={this.handleStateChange} required>
                                                <option value="---">---</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="zip_code">Zip-Code</label>
                                            <input type="text" id="zip_code" name="zip-code" className="form-control" placeholder="(xxxxx)" maxLength="5" value={this.state.zip_code_ship} onChange={this.handleZipChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="country_ship">Country &nbsp;<i className="fa fa-globe" aria-hidden="true"></i></label>
                                            <select className="form-control" name="country_ship" id="country_ship" value={this.state.country_ship} onChange={this.handleCountryChange} required>
                                                <option value="---">--</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <label>
                                    {/* <input type="hidden" name="address" value="no"/> */}
                                    <input type="checkbox" id="address" name="address" value={this.state.useSameAddress} checked="checked" onChange={this.notSameAddress}/>
                                    Use same address for Billing?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="panel panel-success text-left">
                            <div className="panel-heading">
                                <h3>Billing Address</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="street_name_bill">Street &nbsp;<i className="fa fa-road" aria-hidden="true"></i></label>
                                            <input type="text" id="street_name_bill" name="street_name_bill" className="form-control" placeholder="Ex. 123 Marberry Ln." maxLength="50" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="city_name_bill">City</label>
                                            <input type="text" id="city_name_bill" name="city_name_bill" className="form-control" placeholder="Ex. Gumdropsville" maxLength="50" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="state_bill">State</label>
                                            <select className="form-control" name="state_bill" id="state_bill">
                                                <option value="---">--</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="zip_code_bill">Zip-Code</label>
                                            <input type="text" id="zip_code_bill" name="zip-code_bill" className="form-control" placeholder="(xxxxx)" maxLength="5" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="country_bill">Country &nbsp;<i className="fa fa-globe" aria-hidden="true"></i></label>
                                            <select className="form-control" name="country_bill" id="country_bill">
                                                <option value="---">--</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="panel panel-danger text-left">
                            <div className="panel-heading">
                                <h3>Payment Info.</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>We Accept Payment From</label>&nbsp;&nbsp;
                                            <i className="fa fa-cc-visa" aria-hidden="true"></i>&nbsp;
                                            <i className="fa fa-cc-mastercard" aria-hidden="true"></i>&nbsp;
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="card_type">Credit Card Type</label>
                                            <select className="form-control" name="card_type" id="card_type">
                                                <option value="VS">Visa</option>
                                                <option value="MC">MasterCard</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="card_number">Credit Card Number &nbsp;<i className="fa fa-credit-card-alt" aria-hidden="true"></i></label>
                                            <input type="text" id="card_number" name="card_number" className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" maxLength="16" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row form-inline">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Expiration Date:</label>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="month">Month</label>
                                            <select className="form-control" name="month" id="month">
                                                <option value="01">Jan</option>
                                                <option value="02">Feb</option>
                                                <option value="03">Mar</option>
                                                <option value="04">Apr</option>
                                                <option value="05">May</option>
                                                <option value="06">Jun</option>
                                                <option value="07">Jul</option>
                                                <option value="08">Aug</option>
                                                <option value="09">Sep</option>
                                                <option value="10">Oct</option>
                                                <option value="11">Nov</option>
                                                <option value="12">Dec</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="year">Year</label>
                                            <select className="form-control" name="year" id="year">
                                                <option value="2015">2015</option>
                                                <option value="2016">2016</option>
                                                <option value="2017">2017</option>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="cvv_name">Card CVV &nbsp; <i className="fa fa-credit-card" aria-hidden="true"></i></label>
                                            <input type="text" id="cvv_name" name="cvv_name" className="form-control" placeholder="CVV" maxLength="3" required aria-describedby="helpBlock"/>
                                            <span id="helpBlock" className="help-block">(3) digit code on Credit Card back</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-push-6 text-right">
                            <input type="hidden" name="id" value="1" />

                            <script src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                                    data-key="pk_test_r2IrvWINxNiqNPYTEkd8VAm3"
                                    data-description="Enter Payment Information"
                                    data-amount={this.state.cart.total}
                                    data-locale="auto"></script>
                            {/* <button className="btn btn-success btn-md">Order &nbsp;</button> */}
                        </div>
                        <div className="col-sm-6 col-sm-pull-6">
                            <Link to="/"><button type="button" className="btn btn-info btn-md" onClick={history.back}>Cancel Order</button></Link>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Payment
