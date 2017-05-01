import React from 'react';
import ReactDOM from 'react-dom';
import { getUrlParams } from './utils';

//const params = window.location.search.substring(1);
const test = 'id=9&name=foo';
const urlParams = getUrlParams(test);
console.log(urlParams);
