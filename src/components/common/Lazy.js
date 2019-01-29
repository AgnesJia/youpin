import React, { Component } from 'react';
import Lazyload from 'r-img-lazyload';

const pic = require('images/loading.gif');

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const config = {
            options: {
                error: pic,
                loading: pic,
                listenEvents: [ 'scroll' ]
            },
            ...this.props
        };
        return <Lazyload {...config} />;
    }
}