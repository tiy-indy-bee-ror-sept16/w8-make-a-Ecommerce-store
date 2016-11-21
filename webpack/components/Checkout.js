import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router'

class Checkout extends React.Component {
  constructor(props){
    super(props)
    this.handleQuantityChange.bind(this)
    this.state = {
      cart: {
        line_items: []
      },
      quantity: 1,
    }
  }
  componentDidMount(){
    fetch('/view_cart?token=' + sessionStorage.getItem('cart_token'))
    .then(response => response.json())
    .then(response => this.setState({cart: response}))
    // .then(response => {console.log(response)})
  }
  handleQuantityChange(event) {
      this.setState({
          quantity: event.target.value
      })
  }
  render(){
    var patches = this.state.cart.line_items.map((lineItem, i) => {
      var maxQty = lineItem.patch.available
      return         <div className="row" key={i}>
                      <div className="col-sm-4 thumbnail">
                        <img src={lineItem.patch.image} />
                      </div>
                      <div className="col-sm-8 ">
                        <div className="row">
                          <div className="col-sm-12">
                            <h3>{lineItem.patch.title}</h3>
                          </div>
                          <div className="col-sm-12 text-muted">
                            <p>{lineItem.patch.description}</p>
                          </div>

                          <div className="col-sm-12">
                            <h3>${(lineItem.patch.price / 100).toFixed(2)}</h3>
                          </div>
                          <div className="col-sm-12">
                            <h5>Quantity</h5>

                          </div>
                          <div className="col-sm-4 ">
                            <input className="form-control" type="number" name="quantity" id="quantity" step="1" min="1" max={maxQty} pattern="[0-9]*" inputMode="numeric" value={this.state.quantity} onChange={this.handleQuantityChange}/>
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
    })
    return (<div>
        <Nav />
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
            </div>
            <div className="row">
              {patches}
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
                <h4>${(this.state.cart.subtotal / 100).toFixed(2)}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h4> Tax</h4>
              </div>
              <div className="col-sm-6 text-right">
                <h4>${(this.state.cart.taxes / 100).toFixed(2)}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h4>Shipping</h4>
              </div>
              <div className="col-sm-6 text-right">
                <h4>${(this.state.cart.shipping/ 100).toFixed(2)}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h4>Grand Total</h4>
              </div>
              <div className="col-sm-6 text-right">
                <h4>${(this.state.cart.total / 100).toFixed(2)}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <Link to="/payment"><button id="placeorder" type="button" className="btn btn-default btn-block">Place An Order</button></Link>
                  <Link to="/"><button id="checkoutBack" className="btn btn-success btn-block">Contiue Shopping</button></Link>
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
