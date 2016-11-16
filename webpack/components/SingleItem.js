import React from 'react'

class SingleItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        };
    }
    componentDidMount(){
        fetch('/patches')
        .then(response => response.json())
        .then(response => this.setState({items: response}
        /*console.log(response)*/))
    }
    render(){
        var singlePatch = this.state.items.map((patch, i)=>(
            <div className="row singleItem_desc_sec" key={i}>
                <div className="col-sm-12">
                    <h3 tabIndex="0">Patch Name: <em>{patch.product}</em></h3>
                    <h3 tabIndex="0">Patch Sku: <em>{patch.product}</em></h3>
                    <h3 tabIndex="0">Patch Price: <em>&#36; {patch.price}</em></h3>
                    <h4 tabIndex="0">Patch Description</h4>
                    <p>{patch.description}</p>
                </div>
            </div>
        ))
        return (
            <div className="container-fluid">
                <div className="row">
                    <main>
                        <section className="singleItem-disp">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label htmlFor="image description">Patch</label>
                                        <img src="/images/iron-glory-assets/iron-glory-products/igp1.png" alt="random image to hold place" className="thumbnail singleItem_display"/>
                                    </div>
                                </div>
                                <div className="row singleItem_avail_section">
                                    <div className="col-sm-12">
                                        <label tabIndex="0" htmlFor="patch availability">Available</label>
                                        <ul htmlFor="list of available sizes" className="list-inline">
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
                                        <img src="/images/iron-glory-assets/iron-glory-logo.png" alt="image of iron glory"/>
                                    </div>
                                </div>
                                {singlePatch}
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
