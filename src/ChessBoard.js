import React, { Component } from "react"
import List from "./List"

function getData(ding, e){
  let stateCopy = ding

  stateCopy.lists.map(x => {
    if (x.listName === data.listName) {
      x.listDescription = e.target.value
    }
    return x
  })
  return stateCopy;
}


const data = {
  boardName: "My board name",
  lists: [
    {
      listName: "list 1",
      listDescription: "list 1 description",
      cards: [
        {
          cardName: "card 1",
          cardDescription: "card 1 description"
        },
        {
          cardName: "card 2",
          cardDescription: "card 2 description"
        }
      ]
    },
    {
      listName: "list 2",
      listDescription: "list 2 description",
      cards: [
        {
          cardName: "card 3",
          cardDescription: "card 3 description"
        },
        {
          cardName: "card 4",
          cardDescription: "card 4 description"
        }
      ]
    },
    {
      listName: "list 3",
      listDescription: "list 3 description",
      cards: [
        {
          cardName: "card 5",
          cardDescription: "card 5 description"
        },
        {
          cardName: "card 6",
          cardDescription: "card 6 description"
        }
      ]
    }
  ]
}

let horizontalUlStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  overflow: "hidden"
}

let horizontalLiStyle = {
  float: "left",
  display: "block",
  textAlign: "center",
  padding: "16px",
  textDecoration: "none"
}

class ChessBoard extends Component {
  constructor() {
    super()

    this.state = {
      boardData: {}
    }

    this.handler = this.handler.bind(this)
    this.handlerCard = this.handlerCard.bind(this)
  }

  componentDidMount() {
    this.setState({ boardData: data })
  }

  handler(e, data) {
    e.preventDefault()

    const stateCopy = getData(this.state.boardData, e);

    this.setState({ boardData: stateCopy })
  }

  handlerCard(e, data) {
    e.preventDefault()
    let stateCopy = this.state.boardData

    stateCopy.lists.map(list => {
      list.cards.map(card => {
        if (card.cardName === data.cardName) {
          card.cardDescription = e.target.value
        }
        return card
      })
      return list
    })

    this.setState({ boardData: stateCopy })
  }

  render() {
    const boardData = this.state.boardData
    const displayLists = () => {
      let lists =
        boardData.lists &&
        boardData.lists.map(list => (
          <li key={list.listName} style={{ ...horizontalLiStyle }}>
            <List
              handler={this.handler}
              handlerCard={this.handlerCard}
              list={list}
            />
          </li>
        ))
      return lists
    }
    return (
      <div>
        <h1>{boardData.boardName}</h1>

        <ul style={{ ...horizontalUlStyle }}>
          {displayLists()}
        </ul>
        <button onClick={() => console.log(this.state.boardData)}>
          print datastructure
        </button>
      </div>
    )
  }
}

export default ChessBoard
