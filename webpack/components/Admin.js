import React from 'react'

class Admin extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<nav className="navbar  navbar-fixed-top navbar-default">
        <div className="container">
          <div className="col-sm-6">
            <h4>Iron Glory</h4>
          </div>
          <div className="col-sm-6">
            <button id="logout" type="submit" className="btn btn-default text-right">Log Out</button>
          </div>
        </div>
      </nav>


      <div className="container panelBody">
        <div className="row">
          <div className="col-sm-3">
            <h3>Items</h3>
            <h3>Customer</h3>
            <h3>Edit Item</h3>
          </div>
          <div className="col-sm-9">
          </div>
        </div>

      </div>

        )
    }
}

export default Admin
