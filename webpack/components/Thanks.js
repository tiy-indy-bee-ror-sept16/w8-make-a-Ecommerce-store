import React from 'react'

class Thanks extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1>Dear Customer,</h1>
                <h1>Thank you for palcing your order. Here is your order receipt# 348874534985734.</h1>
                <h1>Thank You, <br/>Iron Glory Team</h1>
                </div>
              </div>
              <div className="col-sm-4 col-sm-offset-8"><button className="btn btn-block">Back to Home</button></div>
          </div>
        )
    }
}

export default Thanks
