import React from 'react'

class Admincustomer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <table className="table table-striped table-responsive">
        <tr>
          <th>Cust_ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>username</th>
          <th>Phone Number</th>
          <th>E-mail</th>
          <th>Street Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Country</th>
          <th>Billing Street</th>
          <th>Billing City</th>
          <th>Billing State</th>
          <th>Billing Zip</th>
          <th>Billing Country</th>

        </tr>
        <tr>
          <td>1</td>
          <td>Collin</td>
          <td>Schneider</td>
          <td>Fee</td>
          <td>317-555-2424</td>
          <td>collin@ironglory.com</td>
          <td>1010 Laughing Cove</td>
          <td>Indianapoli</td>
          <td>IN</td>
          <td>46022</td>
          <td>US</td>
          <td>1010 Laughing Cove</td>
          <td>Indianapoli</td>
          <td>IN</td>
          <td>46022</td>
          <td>US</td>
        </tr>
      </table>
        </div>

        )
    }
}

export default Admincustomer
