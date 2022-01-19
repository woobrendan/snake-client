const {connect} = require('./client');
const {setupInput} = require('./input');


console.log('Connection ...');
const returnObj = connect(); //returns object

setupInput(returnObj);

