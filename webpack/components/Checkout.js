import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router'

class Checkout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      patches: []
    }
  }
  componentDidMount(){
    fetch('/api/patches')
    .then(response => response.json())
    .then(response => this.setState({patches: response}))
  }

  render(){
    var patches = this.state.patches.map((patch, i) => {
      return         <div className="row" key={i}>
                      <div className="col-sm-4 thumbnail">
                        <img src={patch.image} />
                      </div>
                      <div className="col-sm-8 ">
                        <div className="row">
                          <div className="col-sm-12">
                            <h3>{patch.title}</h3>
                          </div>
                          <div className="col-sm-12 text-muted">
                            <p>{patch.description}</p>
                          </div>

                          <div className="col-sm-12">
                            <h3>${patch.price / 100}</h3>
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
              <div className="col-sm-6 ">
                <a href="url"><h3>Continue Shopping</h3></a>
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
