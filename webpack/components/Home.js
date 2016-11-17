import React from 'react'
import { Link } from 'react-router'

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
            // console.log(response))
    }
    render () {
        var patches = this.state.patches.map((patch, i) => {
            // console.log(patch)
            return <Link to={'/singleitem/' + patch.id} key={i}>
                <div className="col-sm-3 patchDivs" >
                  <div className="col-sm-12"><img src={patch.image} /></div>
                  <div className="col-sm-12"><b>{patch.product}</b></div>
                  <div className="col-sm-12 patches-description">{patch.description}</div>
                  <div className="col-sm-6 col-sm-offset-8"><b>${patch.price}</b></div>
                </div>
            </Link>
        })

        return (
            <div>
                <Link to={'/singleitem/1'}>Test</Link>
                <div className="background-img">
                </div>
            <nav>
                <div className="container nav-links">
                  <div className="row">
                    <div className="col-sm-3">
                      <Link to="/"><button className="btn btn-default">Home</button></Link>
                    </div>
                    <div className="col-sm-3">
                     <Link to="/singleitem"> <button className="btn btn-default">SingleItem</button></Link>
                    </div>
                    <div className="col-sm-3">
                    <Link to="/thanks">  <button className="btn btn-default">Thanks</button></Link>
                    </div>
                    <div className="col-sm-3">
                     <Link to="/checkout"> <button className="btn btn-default">checkout</button></Link>
                    </div>
                  </div>
                </div>
            </nav>
        <div className="container middle-container">
              <div className="row">
                <div className="col-sm-2">
                  <input type="text" className="form-control" placeholder="Search for patches" />
                  <div className="middle-left-one">
                    Categories
                    <ul>
                      <li>Category 1</li>

                    </ul>
                  </div>
                  <br />
                  <p>
                    Sort Patches By:
                  </p>
                  <div className="middle-left-two">
                      <select className="form-control input-sm">
                        <option>Year</option>
                        <option>Brand</option>
                        <option>Price:Low</option>
                        <option>Price:High</option>
                      </select>
                    <hr />
                  </div>
                </div>
        <div className="col-sm-10">
          <h1 className="text-center">Featured Patches </h1>
          {patches}
          <hr />
        </div>
        </div>
        </div>
        </div>
        )
    }
}
export default Home
