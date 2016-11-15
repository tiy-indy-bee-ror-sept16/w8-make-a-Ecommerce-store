import React from 'react'

class Adminedit extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <div className="row">
      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label for="image description">Patch</label>
              <img src="http://unsplash.it/200?image=1" alt="random image to hold place" className="thumbnail"/>
              <button id="signin" type="button" className="btn btn-default">Upload</button>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label Htmlfor="title">Title</label>
              <input type="text" id="title" name="title" className="form-control"  />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label Htmlfor="sku">SKU</label>
              <input type="text" id="sku" name="sku" className="form-control"  />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label for="year">Year</label>
              <input type="text" id="year" name="year" className="form-control"  />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label Htmlfor="price">Price</label>
              <input type="text" id="price" name="price" className="form-control"  />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <label Htmlfor="description">Description</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label for="brand">Brand</label>
              <input type="text" id="brand" name="brand" className="form-control"  />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label Htmlfor="inventory">On Hand</label>
              <input type="text" id="inventory" name="inventory" className="form-control"  />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <button id="signIn" type="button" className="btn btn-default text-center">Update</button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <button id="delete" type="button" className="btn btn-default text-center">Delete</button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <button id="newItem" type="button" className="btn btn-default text-center">New Item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>

        )
    }
}

export default Adminedit
