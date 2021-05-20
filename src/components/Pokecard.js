/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Pokecard.css";
const POKI_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let PadToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export class Pokecard extends Component {
  render() {
    let Image = `${POKI_API}${PadToThree(this.props.id)}.png`;
    return (
      <div className="Pokecards">
        <h1 className="pokecard-data">{this.props.Name}</h1>
        <div className="Image-Card">
          <img src={Image} />
        </div>
        <div>{this.props.type}</div>
        <div>{this.props.exp}</div>
      </div>
    );
  }
}
