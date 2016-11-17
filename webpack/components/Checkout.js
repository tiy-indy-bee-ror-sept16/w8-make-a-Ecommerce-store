import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

class Checkout extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (<div>
        <Nav />
      <div className="thumbnail">
        <img src="/images/iron-glory-assets/iron-glory-logo.png" />
      </div>

      <div className="container">
        <h2> My Cart</h2>
      </div>
      <div className="container checkOut">
        <div className="row">
          <div className="col-sm-7 ">
            <div className="row well well-sm">
              <div className="col-sm-6 ">
                <h3>PRODUCTS</h3>
              </div>
              <div className="col-sm-6 ">
                <a href="url"><h3>Continue Shopping</h3></a>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="col-sm-4 thumbnail">
                  <img src="/images/iron-glory-assets/iron-glory-products/igp8.png" />
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
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-4 text-danger">
                      <div className="form-group">
                        <button id="delete" type="button" className="btn btn-default btn-block">Delete</button>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <button id="updateCart" type="button" className="btn btn-default btn-block">Update Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1">

          </div>
          <div className="col-sm-4 ">
            <div className="row">
              <div className="col-sm-12 well well-sm">
                <h3>ORDER TOTAL</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h4>Subtotal</h4>
              </div>
              <div className="col-sm-6 text-right">
                <h4>$159.00</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h4> Tax</h4>
              </div>
              <div className="col-sm-6 text-right">
                <h4>$3.00</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h4>Shipping</h4>
              </div>
              <div className="col-sm-6 text-right">
                <h4>$10.00</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h4>Grand Total</h4>
              </div>
              <div className="col-sm-6 text-right">
                <h4>$172.00</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <button id="placeorder" type="button" className="btn btn-default buttonOrder btn-block">Place An Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
}

export default Checkout
