import React from 'react'

class Checkout extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <div className="thumbnail">
                <img src="images/iron-glory-assets/iron-glory-logo.png" />
            </div>

            <div className="container">
                <h2> My Cart</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12 panel">
                                <h3>PRODUCTS</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <div className="col-sm-4 thumbnail">
                                    <img src="images/iron-glory-assets/iron-glory-products/igp8.png" />
                                </div>
                                <div className="col-sm-8 ">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h3>Have a Nice Day Badge</h3>
                                        </div>
                                        <div className="col-sm-12 text-muted">
                                            <p>Brighten your world with this happy little patch from the sixties.</p>
                                        </div>

                                        <div className="col-sm-12">
                                            <h3>$159</h3>
                                        </div>
                                        <div className="col-sm-12">
                                            <h5>Quantity</h5>

                                        </div>
                                        <div className="col-sm-4 ">
                                            <div className="form-group">

                                                <input type="text" id="itemQuantity" name="itemQuantity" className="form-control"  />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 text-danger">
                                            <h5>Remove</h5>
                                        </div>
                                        <div className="col-sm-4">
                                            <h5>Update Cart</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 ">
                        <div className="row">
                            <div className="col-sm-12 panel">
                                <h3>Order Total</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 text-left">
                                <h5>Subtotal</h5>
                            </div>
                            <div className="col-sm-6 text-right">
                                <h5>$159.00</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 text-left">
                                <h5> Tax</h5>
                            </div>
                            <div className="col-sm-6 text-right">
                                <h5>$3.00</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 text-left">
                                <h5>Shipping</h5>
                            </div>
                            <div className="col-sm-6 text-right">
                                <h5>$10.00</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 text-left">
                                <h5>Grand Total</h5>
                            </div>
                            <div className="col-sm-6 text-right">
                                <h5>$172.00</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <button id="checkout" type="button" className="btn btn-success btn-block">Continue Shopping</button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <button id="placeorder" type="button" className="btn btn-success btn-block">Place An Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
}

export default Checkout
