import React, { Component } from 'react';

export default class TopSearch extends Component {
    render() {
        return(
            <div id="top-search">
                <a href="" id="top-search-trigger"><i className="icon-search3"></i><i className="icon-line-cross"></i></a>
                <form action="search.html" method="get">
                    <input type="text" name="q" className="form-control" value="" placeholder="Type &amp; Hit Enter.."/>
                </form>
            </div>
        );
    }
}
