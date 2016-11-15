import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
            <nav>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-3">
                      <Link to="/"><button>Home</button></Link>
                    </div>
                    <div className="col-sm-3">
                     <Link to="/singleitem"> <button>SingleItem</button></Link>
                    </div>
                    <div className="col-sm-3">
                    <Link to="/thanks">  <button>Thanks</button></Link>
                    </div>
                    <div className="col-sm-3">
                     <Link to="/checkout"> <button>checkout</button></Link>
                    </div>
                  </div>
                </div>
            </nav>
        <div className="container middle-container">
              <div className="row">
                <div className="col-sm-2">
                  <p>
                    Show results for:
                  </p>
                  <div className="middle-left-one">
                    Categories
                    <ul>
                      <li><a href="#">Category 1</a></li>
                      <li><a href="#">Category 1</a></li>
                      <li><a href="#">Category 1</a></li>
                      <li><a href="#">Category 1</a></li>
                      <li><a href="#">Category 1</a></li>
                      <li><a href="#">Category 1</a></li>
                    </ul>
                  </div>
                  <br />
                  <p>
                    Sort Patches By:
                  </p>
                  <div className="middle-left-two">
                    <button type="radio"><a href="#">Small</a></button><br />
                              <button type="radio"><a href="#">Medium</a></button><br />
                            <button type="radio"><a href="#">Large</a></button><br />
                              <button type="radio"><a href="#">Brand</a></button><br />
                           <button type="radio"><a href="#">Price Low-High</a></button><br />
                      <button type="radio"><a href="#">Price High-Low</a></button><br />
                    <hr />
                  </div>
                </div>
        <div className="col-sm-10">
          <h1 className="text-center"> Featured Patches </h1>
          <div className="col-sm-3 patchDivs">
            <div className="col-sm-12"><img src="http://unsplash.it/300/200?random" /></div>
            <div className="col-sm-12">Title goes here</div>
            <div className="col-sm-12">Description goes here</div>
            <div className="col-sm-6 col-sm-offset-8"><button className="btn btn-primary">Add to cart</button></div>
          </div>
          <div className="col-sm-3 patchDivs">
            <div className="col-sm-12"><img src="http://unsplash.it/300/200?random" /></div>
            <div className="col-sm-12">Title goes here</div>
            <div className="col-sm-12">Description goes here</div>
            <div className="col-sm-6 col-sm-offset-8"><button className="btn btn-primary">Add to cart</button></div>
          </div>  <div className="col-sm-3 patchDivs">
            <div className="col-sm-12"><img src="http://unsplash.it/300/200?random" /></div>
            <div className="col-sm-12">Title goes here</div>
            <div className="col-sm-12">Description goes here</div>
            <div className="col-sm-6 col-sm-offset-8"><button className="btn btn-primary">Add to cart</button></div>
          </div>
          <hr />
        </div>
        </div>
        </div>
        </div>
        )
    }
}
export default Home
