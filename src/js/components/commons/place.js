/* hepl-dw/vitfoud-client
 *
 * /src/js/components/commons/place.js - Commons Component : place infos
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Place extends Component {
    renderOpenState() {
        if ( this.props.open ) {
            return ( <span className="list__item">{ "Ouvert" }</span> );
        }

        return ( <span className="list__item">{ "Fermé" }</span> );
    }

    renderAddress() {
        return ( <address className="list__item">{ this.props.address }</address> );
    }

    renderDistance() {
        return ( <em className="list__item">{ `${ this.props.distance }m` }</em> );
    }

    render() {
        return (
            <div className="list">
                <strong className="list__item">{ this.props.name }</strong>
                { this.renderAddress() }
                { this.renderDistance() }
                { this.renderOpenState() }
            </div>
        );
    }
}

Place.propTypes = {
    "address": PropTypes.string,
    "distance": PropTypes.number,
    "name": PropTypes.string.isRequired,
    "open": PropTypes.bool,
};

Place.defaultProps = {
    "open": false,
    "address": "Adresse inconnue",
};
