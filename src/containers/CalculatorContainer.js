import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions'
// import { onNumClick, onPlusClick } from '../actions'

import NumBtn from '../components/NumBtn'
import PlusBtn from '../components/PlusBtn'
import Result from '../components/Result'

class CalculatorContainer extends Component {
  render() {
    const { calculator,
            actions
            // onNumClick,
            // onPlusClick
          } = this.props

    return (
      <div>
        <div>
          <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
          <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
          <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
        </div>
        <div>
          <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
          <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
          <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
        </div>
        <div>
          <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
          <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
          <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
        </div>
        <div>
          <NumBtn n={0} onClick={() => actions.onNumClick(0)} />

          <PlusBtn onClick={actions.onPlusClick} />
        </div>
        <div>
          <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
          
          <br/>
          Input : {calculator.inputValue}
          <br/>
          Result : {calculator.resultValue}
          <br/>
          {calculator.showingResult ? 'resultを表示' : 'inputを表示'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  calculator: state.calculator
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
    // onNumClick: (n) => dispatch(onNumClick(n)),
    // onPlusClick: () => dispatch(onPlusClick())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer)