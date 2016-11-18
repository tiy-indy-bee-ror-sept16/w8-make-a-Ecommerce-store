import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router'

class Shipping extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <Nav />
            <div className="container footerPad">
            <div className="row">
                <div className="col-sm-6">
                    <h3>SHIPPING & DELIVERY</h3>
                    <ul>
                        <li> All orders shipped with UPS and USPS Priority mail include tracking/delivery confirmation.</li>
                        <li> Shipping fees are not refundable under any circumstance.</li>
                        <li>Other shipping methods are available upon request, however, should you select uninsured shipping we will not be held responsible for loss or damage of your purchase.</li>
                    </ul>
                    <hr  />
                    <h3>RETURNS & REPLACEMENTS</h3>
                    <ul>
                        <li>Please send all returns and exchanges to: Iron Glory. 475 E Market St, Indianapolis, IN 46204. Please include a note in the box with the order name, order number, and if a return or exchange is needed. In the case of an exchange, please include the needed size.</li>
                        <li>Exchanges: The customer is responsible for the cost of shipping the exchange patches back to Iron Glory. Iron Glory will send the new patches with complimentary shipping. </li>
                        <li> Returns and exchanges will be accepted only if they are sent within seven days of the delivery confirmation date.</li>
                        <li> HOLIDAY RETURN & EXCHANGE POLICY: Orders placed between Nov 26 - Dec 23 have an extended return policy and must be sent back to Iron Glory by December 31st.</li>
                        <li> A full refund of the purchase price, excluding the shipping (unless complimentary), will be made promptly upon receiving the merchandise in the same condition in which it was shipped.</li>
                        <li> There are no refunds on items damaged in shipping. In that case, you must file a claim with the carrier.</li>
                        <li> All packages are to be fully insured. You must notify us of any return so that we will be expecting your package. Returns that are sent without our prior knowledge will be refused.</li>

                    </ul>
                </div>
                <div className="col-sm-6">
                    <img src="/images/iron-glory/route-66.jpg" />
                </div>
            </div>
        </div>
        <Footer />
        </div>

    )
}
}

export default Shipping
