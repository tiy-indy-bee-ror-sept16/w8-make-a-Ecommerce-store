import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router'

class About extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <Nav />
            <div className="container footerPad">
            <div className="row">
                <div className="col-sm-12">
                    <h3>About Iron Glory</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <img src="/images/iron-glory/founder.jpg" />
                    <p>
                        Here is Collin, the founder of Iron Patches, doing a talk on his passion of patches to his employees.
                    </p>
                </div>
                <div className="col-sm-4">
                    <h3 className="text-capitalize">Passion for Patches</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3 className="text-capitalize">Craftmanship</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="col-sm-4">
                    <h3 className="text-capitalize">Quality</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
        </div>

    )
}
}

export default About
