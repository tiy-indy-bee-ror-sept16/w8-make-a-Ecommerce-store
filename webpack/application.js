import React from "react"
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './components/Home'
import Thanks from './components/Thanks'

document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/thanks" component={Thanks} />
        </Router>
        ,document.getElementById('app')
    )
})
