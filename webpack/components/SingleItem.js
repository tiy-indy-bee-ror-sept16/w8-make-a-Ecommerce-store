import React from 'react'

class SingleItem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div class="container-fluid">
                <div class="row">
                    <main>
                        <section class="singleItem-disp">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <label for="image description">Patch</label>
                                        <img src="../../assets/images/iron-glory-assets/iron-glory-products/igp1.png" alt="random image to hold place" class="thumbnail singleItem_display"/>
                                    </div>
                                </div>
                                <div class="row singleItem_sizes_section">
                                    <div class="col-sm-12">
                                        <label tabindex="0" for="patch sizes">Sizes</label>
                                        <ul for="list of sizes" class="list-inline">
                                            <li>XS</li>
                                            <li>S</li>
                                            <li>M</li>
                                            <li>L</li>
                                            <li>XL</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row singleItem_avail_section">
                                    <div class="col-sm-12">
                                        <label tabindex="0" for="patch availability">Available</label>
                                        <ul for="list of available sizes" class="list-inline">
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
                        <section class="singleItem-desc">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <img src="../../assets/images/iron-glory-assets/iron-glory-logo.png" alt="image of iron glory"/>
                                    </div>
                                </div>
                                <div class="row singleItem_desc_sec">
                                    <div class="col-sm-12">
                                        <h3 tabindex="0">Patch Name: <em>Fender</em></h3>
                                        <h3 tabindex="0">Patch Price: <em>&#36; 90.00</em></h3>
                                        <h4 tabindex="0">Patch Description</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="col-sm-6"><button class="btn btn-success singleItem_desc_btn">Add To Cart</button></div>
                                    <div class="col-sm-6"><button class=" btn btn-primary singleItem_desc_btn">Back To Patches</button></div>
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
