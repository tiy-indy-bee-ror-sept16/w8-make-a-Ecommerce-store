import React from 'react'

class Checkout extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <div className="container">
        <h1> My Cart</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <h5>PRODUCT</h5>
              </div>
              <div className="col-sm-6 flexPQS">

                <h5>  PRICE  </h5>
                <h5>  QTY </h5>
                <h5>  SUBTOTAL </h5>

              </div>
            </div>
            <div className="row">
              <div className="col-sm-1">
                <label>
                  <input type="hidden" name="delete" value="no" />
                  <input type="checkbox" name="delete" value="yes" />
                </label>
              </div>
              <div className="col-sm-2">
                <h6>tn</h6>
              </div>
              <div className="col-sm-3">
                <h5>Have a Nice Day Badge</h5>
              </div>
              <div className="col-sm-6 flexPQS">
                <h6>  $159.00  </h6>
                <h6>  1 </h6>
                <h6>  $159.00 </h6>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <h4>Order Total</h4>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h6>Subtotal</h6>
              </div>
              <div className="col-sm-6 text-right">
                <h6>$74.00</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h6> Tax</h6>
              </div>
              <div className="col-sm-6 text-right">
                <h6>$3.00</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h6>Shipping</h6>
              </div>
              <div className="col-sm-6 text-right">
                <h6>$10.00</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-left">
                <h6>Grand Total</h6>
              </div>
              <div className="col-sm-6 text-right">
                <h6>$87.00</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 ">
                <div className="form-group">
                  <button id="checkout" type="button" className="btn btn-success btn-block">Place an Order!</button>
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
