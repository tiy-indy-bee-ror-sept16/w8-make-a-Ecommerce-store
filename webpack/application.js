import React from "react"
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './components/Home'
import Thanks from './components/Thanks'
import Checkout from './components/Checkout'
import SingleItem from './components/SingleItem'
import Payment from './components/Payment'

document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/singleitem/:id" component={SingleItem} />
            <Route path="/payment" component={Payment} />

            {/* // if you want to see a single patch you can use: /patches/:id
            // remember if you wanted to see all patched it would be: /patches */}
        </Router>
        ,document.getElementById('app')
    )
})
