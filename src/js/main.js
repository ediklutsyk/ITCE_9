require('../scss/base.scss');

let React = require('react');
let ReactDOM = require('react-dom');
let App = require('./app');
let domReady = require('domready');
let GoogleMaps = require('google-maps');

domReady(()=> {
    GoogleMaps.LIBRARIES = ['places'];
    GoogleMaps.KEY='AIzaSyAqo9zto8ZKdv2KWPg1NIzrzGTxbyI-ok4';
    GoogleMaps.load((google)=> {
        ReactDOM.render(<App mapService={google}/>,
            document.getElementById('app'));
    });

});
