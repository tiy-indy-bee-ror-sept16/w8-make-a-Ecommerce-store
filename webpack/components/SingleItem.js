import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
class SingleItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            id: window.location.href.split('/')[4],
            item: {}
        };
    }
    componentDidMount(){
        fetch('/patches/' + this.state.id)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({item: response}))
    }
    render(){
        return (
            <div>
                <Nav />
            {/* <div className="container-fluid">
                <div className="row">
                    <ul className="singleItemNavBar">
                      <li>Home</li>
                      <li className="cart">Cart</li>
                    </ul>
                </div>
            </div> */}
            <div className="container-fluid">
                <div className="row">
                    <main className="singleItem-body">
                        <section className="singleItem-disp">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label htmlFor="image description">Patch</label>
                                        <img src={this.state.item.image} alt="random image to hold place" className="thumbnail singleItem_display"/>
                                    </div>
                                </div>
                                <div className="row singleItem_avail_section">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label forHTML="pathAvailability">Available Sizes</label>
                                            <select className="form-control" name="available_sizes" id="qty">
                                                <option value="" selected>1</option>
                                                <option value="">5</option>
                                                <option value="">10</option>
                                                <option value="">12</option>
                                                <option value="">15</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="singleItem-desc">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img src="/images/iron-glory-assets/iron-glory-logo.png" alt="image of iron glory"/>
                                    </div>
                                </div>
                                <div className="row singleItem_desc_sec">
                                    <div className="col-sm-12">
                                        <h3 tabIndex="0">Patch Name: <em>{this.state.item.product}</em></h3>
                                        <h3 tabIndex="0">Patch Sku: <em>{this.state.item.sku}</em></h3>
                                        <h3 tabIndex="0">Patch Price: <em>&#36; {this.state.item.price}</em></h3>
                                        <h3 tabIndex="0">Patch Description: </h3>
                                        <p>{this.state.item.description}</p>
                                        <label htmlFor="select quantity">Select Qty.</label>
                                        <select className="form-control" id="selectQuantity">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div className="row singleItem_desc_sec">
                                    <div className="col-sm-12">
                                        <h3 tabIndex="0">Patch Name: <em>Fender</em></h3>
                                        <h3 tabIndex="0">Patch Price: <em>&#36; 90.00</em></h3>
                                        <h4 tabIndex="0">Patch Description</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div> */}
                                <div className="row text-center">
                                    <div className="col-sm-6"><button className="btn btn-success singleItem_desc_btn">Add To Cart</button></div>
                                    <div className="col-sm-6"><Link to="/"><button className=" btn btn-primary singleItem_desc_btn">Back To Patches</button></Link></div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
        )
    }
}

export default SingleItem
