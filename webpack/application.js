import React from "react"
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './components/Home'
import Thanks from './components/Thanks'
import Checkout from './components/Checkout'
import SingleItem from './components/SingleItem'
import Payment from './components/Payment'
import Legal from './components/Legal'
import Shipping from './components/Shipping'
import Contact from './components/Contact'
import About from './components/About'


document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/singleitem/:id" component={SingleItem} />
            <Route path="/payment" component={Payment} />
            <Route path="/legal" component={Legal} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
        </Router>
        ,document.getElementById('app')
    )
})
