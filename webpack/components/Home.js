import React from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
            <nav className="navbar  navbar-fixed-top navbar-default">
          <div className="container">
            <a className="navbar-brand" href="#">Logo</a>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#"><i className="glyphicon glyphicon-home"></i> Home <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Another Page</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
              </ul>
              <form className="navbar-form text-center">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search for patches" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
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
                    <input type="checkbox"><a href="#">Small</a></input><br />
                              <input type="checkbox"><a href="#">Medium</a></input><br />
                            <input type="checkbox"><a href="#">Large</a></input><br />
                              <input type="checkbox"><a href="#">Brand</a></input><br />
                           <input type="checkbox"><a href="#">Price Low-High</a></input><br />
                      <input type="checkbox"><a href="#">Price High-Low</a></input><br />
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
