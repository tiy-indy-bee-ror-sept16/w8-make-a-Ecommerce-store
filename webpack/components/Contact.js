import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router'

class Contact extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <Nav />
            <div className="container footerPad">
            <div className="row">
                <div className="col-sm-6">
                    <h3>Contacting Us</h3>
                    <h5>
                        If there are any questions regarding this privacy policy you may contact us using the information below:
                    </h5>
                    <p>Iron Glory</p>
                    <p>475 E Market St, Indianapolis, IN 46204</p>

                    <p>info@ironglory.com</p>
                    <p>(317) 238-3988 </p>

                </div>
                <div className="col-sm-6">
                    <img src="/images/iron-glory/ironyard-map.png" />
                </div>
            </div>
        </div>
        <Footer />
        </div>


    )
}
}

export default Contact
