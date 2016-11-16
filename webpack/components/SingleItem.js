import React from 'react'

class SingleItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <main>
                        <section className="singleItem-disp">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label for="image description">Patch</label>
                                        <img src="images/iron-glory-assets/iron-glory-products/igp1.png" alt="random image to hold place" className="thumbnail singleItem_display"/>
                                    </div>
                                </div>
                                <div className="row singleItem_sizes_section">
                                    <div className="col-sm-12">
                                        <label tabindex="0" for="patch sizes">Sizes</label>
                                        <ul for="list of sizes" className="list-inline">
                                            <li>XS</li>
                                            <li>S</li>
                                            <li>M</li>
                                            <li>L</li>
                                            <li>XL</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row singleItem_avail_section">
                                    <div className="col-sm-12">
                                        <label tabindex="0" for="patch availability">Available</label>
                                        <ul for="list of available sizes" className="list-inline">
                                            <li>1</li>
                                            <li>5</li>
                                            <li>10</li>
                                            <li>12</li>
                                            <li>15</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="singleItem-desc">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img src="images/iron-glory-assets/iron-glory-logo.png" alt="image of iron glory"/>
                                    </div>
                                </div>
                                <div className="row singleItem_desc_sec">
                                    <div className="col-sm-12">
                                        <h3 tabindex="0">Patch Name: <em>Fender</em></h3>
                                        <h3 tabindex="0">Patch Price: <em>&#36; 90.00</em></h3>
                                        <h4 tabindex="0">Patch Description</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-sm-6"><button className="btn btn-success singleItem_desc_btn">Add To Cart</button></div>
                                    <div className="col-sm-6"><button className=" btn btn-primary singleItem_desc_btn">Back To Patches</button></div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

        )
    }
}

export default SingleItem
