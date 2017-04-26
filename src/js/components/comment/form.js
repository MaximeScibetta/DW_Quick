/* hepl-dw/vitfoud-client
 *
 * /src/js/components/comment/form.js - Comment Component : form component
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CommentForm extends Component {
    constructor( oProps ) {
        super( oProps );

        this.state = {
            "hasError": false,
            "name": "",
            "content": "",
            "rating": 3,
        };
    }

    handleSubmit( oEvent ) {
        oEvent.preventDefault();

        let bHasError = false;

        bHasError = bHasError || ( !this.state.name || this.state.name.length < 4 || this.state.name.length > 20 );

        bHasError = bHasError || ( !this.state.content || this.state.content.length < 4 || this.state.name.length > 140 );

        bHasError = bHasError || ( isNaN( this.state.rating ) || this.state.rating < 0 || this.state.rating > 5 );

        this.setState( {
            "hasError": bHasError,
        } );

        if ( !bHasError ) {
            this.props.onSubmit && this.props.onSubmit( {
                "name": this.state.name,
                "comment": this.state.content,
                "rating": this.state.rating,
            } );
        }
    }

    handleNameChange( oEvent ) {
        this.setState( { "name": oEvent.target.value } );
    }

    handleRatingChange( oEvent ) {
        this.setState( { "rating": oEvent.target.value } );
    }

    handleContentChange( oEvent ) {
        this.setState( { "content": oEvent.target.value } );
    }

    render() {
        let $error;

        if ( this.state.hasError ) {
            $error = (
                <div>{ "Veuillez remplir tous les champs !" }</div>
            );
        }

        return (
            <form onSubmit={ this.handleSubmit.bind( this ) } className="form">
                { $error }
                <div className="form__name">
                    <label htmlFor="comment-form-name">{ "Nom" }</label>
                    <input type="text" id="comment-form-name" onChange={ this.handleNameChange.bind( this ) } placeholder={ "Nom/Pseudo" } value={ this.state.name } />
                </div>
                <div className="form__eval">
                    <label htmlFor="comment-form-rating">{ "Évaluation" }</label>
                    {/*<select id="comment-form-rating" value={ this.state.rating } onChange={ this.handleRatingChange.bind( this ) }>
                        <option value={ 0 }>{ "Bof" }</option>
                        <option value={ 1 }>{ "Mouais" }</option>
                        <option value={ 2 }>{ "Peut mieux faire" }</option>
                        <option value={ 3 }>{ "Passable" }</option>
                        <option value={ 4 }>{ "Super" }</option>
                        <option value={ 5 }>{ "Formidable" }</option>
                    </select>*/}
                    <div id="comment-form-rating" value={ this.state.rating } onChange={ this.handleRatingChange.bind( this ) } className="star__eval">
                        <span value={ 1 } className="star star__hover"></span>
                        <span value={ 2 } className="star star__hover"></span>
                        <span value={ 3 } className="star star__hover"></span>
                        <span value={ 4 } className="star star__hover"></span>
                        <span value={ 5 } className="star star__hover"></span>
                    </div>
                </div>
                <div className="form__comment">
                    <label htmlFor="comment-form-content">{ "Commentaire" }</label>
                    <textarea id="comment-form-content" value={ this.state.content } onChange={ this.handleContentChange.bind( this ) } />
                </div>
                <button type="submit">{ "Envoyer" }</button>
            </form>
        );
    }
}

CommentForm.propTypes = {
    "onSubmit": PropTypes.func,
};
