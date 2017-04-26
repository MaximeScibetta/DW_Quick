/* hepl-dw/vitfoud-client
 *
 * /src/js/components/details/comments.js - Details Components : comments list
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import Loading from "../commons/loading";
import PlaceComment from "./comment";
import { Link } from "react-router-dom";

export default class PlaceComments extends Component {
    render() {
        let $content;

        if ( this.props.fetching ) {
            $content = ( <Loading /> );
        } else if ( this.props.comments.length ) {
            $content = (
                <ul className="comments">
                    { this.props.comments.map( ( oComment ) => (
                        <PlaceComment key={ `${ oComment.name }-${ oComment.date }` } { ...oComment } />
                    ) ) }
                </ul>
            );
        } else {
            $content = ( <p>{ "Pas (encore) de commentaire." }</p> );
        }

        return (
            <div className="container">
                <div className="window">
                    <div className="info__comments">
                        <h4 className="visuallyhidden">{ "Commentaires" }</h4>
                        { $content }
                    </div>
                </div>
                <a href="javascript:void(0)" className="more"> </a>
                <Link className="addComment" to={ `/details/${ this.props.slug }/comment` }>{ "Ajouter un commentaire" }</Link>
            </div>
        );
    }
}

PlaceComments.propTypes = {
    "comments": PropTypes.arrayOf( PropTypes.shape( {
        "comment": PropTypes.string,
        "date": PropTypes.number,
        "name": PropTypes.string,
        "rating": PropTypes.number,
    } ) ),
    "fetching": PropTypes.bool,
    "slug": PropTypes.string,
};

PlaceComments.defaultProps = {
    "comments": [],
    "fetching": false,
};
