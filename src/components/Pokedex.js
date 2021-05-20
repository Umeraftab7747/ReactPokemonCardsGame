import React, { Component } from "react";
import { Pokecard } from "../components";
import "./Pokedex.css";

export class Pokedex extends Component {
  static defaultProps = {
    Pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    let title;
    if (this.props.isWinner) {
      title = <div className="Winner-PokeDex">WINNER</div>;
    } else if (!this.props.isWinner) {
      title = <div className="Loser-PokeDex">LOSER</div>;
    }
    return (
      <div className="Pokedex">
        <div className="PokeDex-Title">Pokedex {this.props.index}</div>
        <div className="TotalExperince">
          Total Experince is {this.props.exp}
        </div>
        {title}
        <div className="Poke-cards">
          {this.props.Pokemon.map((p) => (
            <Pokecard
              Name={p.name}
              id={p.id}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
