import React, { Component } from "react"
import Card from "./Card"

class List extends Component {
  render() {
    const displayCards = () => {
      let cards = this.props.list.cards.map(card => (
        <li key={card.cardName}>
          <Card card={card} handlerCard={this.props.handlerCard} />
        </li>
      ))
      return cards
    }

    return (
      <div>
        <h1>{this.props.list.listName}</h1>
        <input
          type="text"
          onChange={e => this.props.handler(e, this.props.list)}
          value={this.props.list.listDescription}
        />

        <ul>{displayCards()}</ul>
      </div>
    )
  }
}

export default List
