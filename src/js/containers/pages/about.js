/* hepl-dw/vitfoud-client
 *
 * /src/js/containers/pages/about.js - Container for about page
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React from "react";
import { Component as Container } from "reflux";

import Header from "../../components/commons/header";

import AboutProject from "../../components/about/project";
import AboutMe from "../../components/about/me";

export default class AboutPageContainer extends Container {
    render() {
        console.log( "AboutPageContainer.render( state: )", this.state );

        return (
            <div className={ "page" }>
                <Header pageTitle={ "À propos…" } backLink="/" />
                <main className={ "content" }>
                    <div className="about">
                        <div className="about__head">
                            <h1>Coded by</h1>
                            <h2>Maxime Scibetta</h2>
                        </div>
                        <AboutProject />
                        <AboutMe />
                    </div>
                </main>
            </div>
        );
    }
}
