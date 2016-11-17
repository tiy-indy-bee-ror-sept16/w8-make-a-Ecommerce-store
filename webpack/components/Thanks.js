import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

class Thanks extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Nav />
            <div className="container thankyou-container">
            <div className="row">
              <div className="col-sm-12">
                <h1>Dear Customer,</h1>
                <h1>Thank you for palcing your order. Here is your order receipt# 348874534985734.</h1>
                <h1>Thank You, <br/>Iron Glory Team</h1>
                </div>
              </div>
              <div className="col-sm-4 col-sm-offset-8"><Link to="/"><button className="btn btn-block">Back to Home</button></Link></div>
          </div>
          <Footer />
          </div>
        )
    }
}

export default Thanks
