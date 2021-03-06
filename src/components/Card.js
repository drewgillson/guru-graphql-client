import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './Row';
import ls from 'local-storage'

const Div = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  margin: auto;
  width: 600px;
  max-width: 100%;
  text-align: left;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
  font-size: 16px;
  font-weight: bold;
`;

const Remove = styled.div`
  padding: 15px 15px;
  float: right;
  cursor: pointer;
  color: #ddd;
`

const Score = styled.div`
  float: right;
  font-weight: normal;
`

const Super = styled.span`
  font-size: 12px;
  color: #bbb;
  padding-left: 10px;
`

class Card extends React.Component {

  constructor({card}) {
    super();
    this.card = card;
    this.state = {
      isHidden: (ls.get(this.card.title + '_isHidden') == null ? true : ls.get(this.card.title + '_isHidden')),
      isRemoved: false,
      rowScores: ls.get(this.card.title + '_rowScores') || {},
      totalScore: ls.get(this.card.title + '_totalScores') || 0
    }
    this.toggleHidden = this.toggleHidden.bind(this);
    this.remove = this.remove.bind(this);
    this.addScores = this.addScores.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  toggleHidden () {
    const hiddenState = !this.state.isHidden
    this.setState({
      isHidden: hiddenState
    })
    ls.set(this.card.title + '_isHidden',hiddenState)
  }

  remove() {
    this.setState({
      isRemoved: true,
      isHidden: true
    })
  }

  addScores(a,b) {
    return Number(a) + Number(b)
  }

  componentDidMount() {
    this.setState({
      totalScore: ls.get(this.card.title + '_totalScore'),
    });
  }

  updateScore (value, idx) {
    let newScores = Object.assign({}, this.state.rowScores)
    newScores[idx] = value
    const scoreSum = Object.values(newScores).reduce(this.addScores, 0)
    this.setState({
      rowScores: newScores,
      totalScore: scoreSum
    })
    ls.set(this.card.title + '_rowScores',newScores)
    ls.set(this.card.title + '_totalScore',scoreSum)
  }
  
  render() {
    let title = this.card.title;
    let score_percent = Math.round(this.state.totalScore / (this.card.rows.length * 4)*100)
    if (!this.state.isHidden) {
      return (
        <Div>
          <Container>
            <Title onClick={this.toggleHidden}><input type="checkbox" readOnly checked={!this.state.isHidden}/> {title} <Score>{score_percent}% <Super>({this.state.totalScore}/{this.card.rows.length * 4})</Super></Score></Title>
            {this.card.rows.map((name, index) => (
              <Row key={index} card={title} name={name} score={this.state.rowScores[index]} idx={index} updateScore={this.updateScore}></Row>
            ))}
          </Container>
        </Div>
      );
    }
    else if (!this.state.isRemoved) {
      return (
        <Div>
          <Container>
            <Remove onClick={this.remove} alt="Remove">x</Remove>
            <Title onClick={this.toggleHidden}><input type="checkbox" readOnly checked={!this.state.isHidden}/> {title}</Title>
          </Container>
        </Div>
      );
    }
    else {
      return (
        <Div></Div>
      )
    }
  }
}

Card.propTypes = {
  card: PropTypes.any.isRequired, // eslint-disable-line
};

export default Card;