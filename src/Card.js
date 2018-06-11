import React, { Component } from "react"

const data = [
  "card 1 description",
  "card 2 description",
  "card 3 description",
  "card 4 description",
  "card 5 description",
  "card 6 description"
]

class Card extends Component {

  constructor(props){
    super(props)

    this.state= {
      languages: [
        "nederlands",
        "engels",
        "frans"
      ]
    }

  }

  render() {
    return (
      <div>
        <h1>{this.props.card.cardName}</h1>

        {/* uncomment to use this as gui element */}
        {/* <input
          type="text"
          onChange={e => this.props.handlerCard(e, this.props.card)}
          value={this.props.card && this.props.card.cardDescription}
        /> */}

        {/* comment to stop using this as gui element */}
        <select
              value={this.props.card.cardDescription}
              onChange={e => this.props.handlerCard(e, this.props.card)}>

              {/* {data.map(x => ( <option key={x} value={x}>{x}</option>))} */}
          {this.state.languages.map(x => ( <option key={x} value={x}>{x}</option>))}
        </select>
      </div>
    )
  }
}

export default Card
