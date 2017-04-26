/* hepl-dw/vitfoud-client
 *
 * /src/js/components/about/project.js - About Component : about project
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";

export default class AboutProject extends Component {
    render() {
        return (
            <div>
             <p>
                { "Application Quick, réalisé dans le cadre du cours de Design mobile à la Haute Ecole de la province de Liège." }
             </p>
             <p>
                  { "Cette application permet de trouver le quick le plus proche de votre position selon votre géolocalisation. Les informations sur les restaurant proviennent de l'API Quick en ligne voir ci-dessous" }
             </p>
            </div>
        );
    }
}
