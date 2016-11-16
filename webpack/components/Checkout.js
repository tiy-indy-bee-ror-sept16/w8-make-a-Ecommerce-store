import React from 'react'

class Checkout extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <div class="thumbnail">
    <img src="images/iron-glory-assets/iron-glory-logo.png" />
  </div>

  <div class="container">
    <h2> My Cart</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-7">
        <div class="row">
          <div class="col-sm-12 well well-sm">
            <h3>PRODUCTS</h3>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="col-sm-4 thumbnail">
              <img src="images/iron-glory-assets/iron-glory-products/igp8.png" />
            </div>
            <div class="col-sm-8 ">
              <div class="row">
                <div class="col-sm-12">
                  <h3>Have a Nice Day Badge</h3>
                </div>
                <div class="col-sm-12 text-muted">
                  <p>Brighten your world with this happy little patch from the sixties.</p>
                </div>

                <div class="col-sm-12">
                  <h3>$159</h3>
                </div>
                <div class="col-sm-12">
                  <h5>Quantity</h5>

                </div>
                <div class="col-sm-4 ">
                  <div class="form-group">

                    <input type="text" id="itemQuantity" name="itemQuantity" class="form-control"  />
                  </div>
                  </div>
                <div class="col-sm-4 text-danger">
              <h5>Remove</h5>
                  </div>
                <div class="col-sm-4">
              <h5>Update Cart</h5>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div class="col-sm-1">

     </div>
      <div class="col-sm-4 ">
        <div class="row">
        <div class="col-sm-12 well well-sm">
        <h2>Order Total</h2>
            </div>
            </div>
        <div class="row">
          <div class="col-sm-6 text-left">
            <h4>Subtotal</h4>
          </div>
          <div class="col-sm-6 text-right">
            <h4>$159.00</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-left">
            <h4> Tax</h4>
          </div>
          <div class="col-sm-6 text-right">
            <h4>$3.00</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-left">
            <h4>Shipping</h4>
          </div>
          <div class="col-sm-6 text-right">
            <h4>$10.00</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-left">
            <h4>Grand Total</h4>
          </div>
          <div class="col-sm-6 text-right">
            <h4>$172.00</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <button id="checkout" type="button" class="btn btn-success btn-block">Continue Shopping</button>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <button id="placeorder" type="button" class="btn btn-success btn-block">Place An Order</button>
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
