import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Articles from './components/Articles';
import About from './components/About';

ReactDOM.render(<Router history = {browserHistory}>
    <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "home" component = {Home} />
        <Route path = "about" component = {About} />
        <Route path = "articles" component = {Articles} />
    </Route>
</Router>, document.getElementById('root'));


