import React from 'react'

class Adminitem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <table className="table table-striped table-responsive">
          <tr>
            <th>Item_ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Inventory</th>
            <th>Edit</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Image</td>
            <td>Title</td>
            <td>Brighten your world with this happy little patch from the sixties.</td>
            <td>1969</td>
            <td>159</td>
            <td>IGP8</td>
            <td>12</td>
            <td>no </td>

          </tr>
        </table>
        </div>

        )
    }
}

export default Adminitem
