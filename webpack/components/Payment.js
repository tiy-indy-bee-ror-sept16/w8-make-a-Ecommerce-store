import React from 'react'

class Payment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div className="container">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <h2>CHECKOUT PAGE</h2>
                        </div>
                    </div>

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
                                            <input type="text" id="first_name" name="first_name" className="form-control" placeholder="First Name" maxlength="50" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="first_name">Last Name &nbsp;<i className="fa fa-user" aria-hidden="true"></i></label>
                                            <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Last Name" maxlength="50" required />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row form-inline text-left">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number &nbsp;<i className="fa fa-phone" aria-hidden="true"></i></label>
                                            <input type="text" id="phone" name="phone" className="form-control" placeholder="(xxx)-(xxx)-(xxxx)" maxlength="10" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email &nbsp;<i className="fa fa-envelope" aria-hidden="true"></i></label>
                                            <input type="text" id="email" name="email" className="form-control" placeholder="Ex. joe@example.com" maxlength="50" required />
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
                                            <input type="text" id="street_name" name="street_name" className="form-control" placeholder="Ex. 123 Marberry Ln." maxlength="50"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="city_name">City</label>
                                            <input type="text" id="city_name" name="city_name" className="form-control" placeholder="Ex. Gumdropsville" maxlength="50"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="state">State</label>
                                            <select className="form-control" name="state" id="state">
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District Of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN" selected>Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="zip_code">Zip-Code</label>
                                            <input type="text" id="zip_code" name="zip-code" className="form-control" placeholder="(xxxxx)" maxlength="5"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="country_ship">Country &nbsp;<i className="fa fa-globe" aria-hidden="true"></i></label>
                                            <select className="form-control" name="country_ship" id="country_ship">
                                                <option value="" selected="selected">--</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <label>
                                    <input type="hidden" name="address" value="no"/>
                                    <input type="checkbox" id="address" name="address" value="yes" checked="checked"/>
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
                                            <input type="text" id="street_name_bill" name="street_name_bill" className="form-control" placeholder="Ex. 123 Marberry Ln." maxlength="50" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="city_name_bill">City</label>
                                            <input type="text" id="city_name_bill" name="city_name_bill" className="form-control" placeholder="Ex. Gumdropsville" maxlength="50" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="state_bill">State</label>
                                            <select className="form-control" name="state_bill" id="state_bill">
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District Of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN" selected>Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="zip_code_bill">Zip-Code</label>
                                            <input type="text" id="zip_code_bill" name="zip-code_bill" className="form-control" placeholder="(xxxxx)" maxlength="5" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="country_bill">Country &nbsp;<i className="fa fa-globe" aria-hidden="true"></i></label>
                                            <select className="form-control" name="country_bill" id="country_bill">
                                                <option value="" selected="selected">--</option>
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
                                            <label>We Accept Payment From</label>
                                            <i className="fa fa-cc-amex" aria-hidden="true"></i>
                                            <i className="fa fa-google-wallet" aria-hidden="true"></i>
                                            <i className="fa fa-cc-discover" aria-hidden="true"></i>
                                            <i className="fa fa-paypal" aria-hidden="true"></i>
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
                                            <input type="text" id="card_number" name="card_number" className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" maxlength="16" required />
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
                                                <option value="02" selected>Feb</option>
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
                                                <option value="2017" selected>2017</option>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="cvv_name">Card CVV &nbsp; <i className="fa fa-credit-card" aria-hidden="true"></i></label>
                                            <input type="text" id="cvv_name" name="cvv_name" className="form-control" placeholder="CVV" maxlength="3" required aria-describedby="helpBlock"/>
                                            <span id="helpBlock" className="help-block">(3) digit code on Credit Card back</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-push-6 text-right">
                            <button className="btn btn-success btn-md">Order &nbsp;</button>
                        </div>
                        <div className="col-sm-6 col-sm-pull-6">
                            <button type="button" className="btn btn-info btn-md">Cancel Order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Payment
