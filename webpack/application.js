import React from "react"
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './components/Home'
import Thanks from './components/Thanks'
import Checkout from './components/Checkout'
import SingleItem from './components/SingleItem'

document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/singleitem/:id" component={SingleItem} />
        </Router>
        ,document.getElementById('app')
    )
})
