import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container-fluid main-nav">
                <div className="row">
                    <ul className=".col-sm-12 singleItemNavBar">
                        <div className="col-sm-1"><Link to="/"><li>Home</li></Link></div>
                        <div className="col-sm-1"><Link to="/thanks"><li>Thanks</li></Link></div>
                        <div className="col-sm-2 col-sm-offset-3"><li><img src="/images/iron-glory-assets/iron-glory-logo-inverted.png"></img></li></div>
                        <div className="col-sm-2 col-sm-offset-3"><Link to="/checkout"><li className="cart">Cart&nbsp;<i className="fa fa-shopping-cart" aria-hidden="true"></i></li></Link></div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav
