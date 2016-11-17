import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patches: []
        }
    }
    componentDidMount(){
        fetch('/patches')
        .then(response => response.json())
        .then(response => this.setState({patches: response}))
    }
    render () {
        var patches = this.state.patches.map((patch, i) => {
            return <Link to={'/singleitem/' + patch.id} key={i}>
                <div className="col-sm-3 patchDivs" >
                  <div className="col-sm-12"><img src={patch.image}/></div>
                  <div className="col-sm-12"><b>{patch.product}</b></div>
                  <div className="col-sm-12 patches-description">{patch.description}</div>
                  <div className="col-sm-6 col-sm-offset-7"><b>${patch.price.fractional}</b></div>
                </div>
            </Link>
        })

        return (
            <div>
                <Nav />
                <div className="background-img">
                </div>
                <div className="container-fluid middle-container">
                      <div className="row">
                          <div className="col-sm-12">
                              <input type="text" className="form-control" placeholder="Search for patches" />
                              <br/>
                              <div className="col-sm-6">
                        <p>
                      Categories:
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <p>
                      Sort Patches By:
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <select className="form-control input-sm">
                          <option>Music</option>
                          <option>Farming</option>
                          <option>National Parks</option>
                          <option>Movies</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                        <select className="form-control input-sm">
                          <option>Year</option>
                          <option>Brand</option>
                          <option>Price:Low</option>
                          <option>Price:High</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-10 col-sm-offset-1">
                  <h1 className="text-center">Featured Patches </h1>
                  {patches}
                  <hr />
                </div>
            </div>
            <Footer />
        </div>
    </div>
        )
    }
}
export default Home
