import React from "react"
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './components/Home'
import Thanks from './components/Thanks'
import Admin from './components/Admin'
import Checkout from './components/Checkout'
import SingleItem from './components/SingleItem'

document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/admin" component={Admin} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/singleitem" component={SingleItem} />
        </Router>
        ,document.getElementById('app')
    )
})
