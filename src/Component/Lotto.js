import React, { Component } from 'react'
import './Lotto.css'
import SetLimit from './SetLimit'
import RandomGenerator from './RandomGenerator'
import Count from './Count'


export class Lotto extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             setNumber: 0,
             setCount: 0

        }
    }
    decrementSetNumber = () => {
        return ( this.state.setNumber > 0? (
            this.setState  ((prevState) => ({
            setNumber: prevState.setNumber - 1
        }))
        ): "")
    }
    incrementSetNumber = () => {

        this.setState  ((prevState) => ({
            setNumber: parseInt(prevState.setNumber) + 1
        }))
    }
    resetInitialValue = () => {
         this.setState ( {
             setNumber: 0
        })
    }
      decrementSetCount = () => {
        return ( this.state.setCount > 0? (
            this.setState  ((prevState) => ({
            setCount: prevState.setCount - 1
        }))
        ): "")
    }
    incrementSetCount = () => {

        this.setState  ((prevState) => ({
            setCount: parseInt(prevState.setCount) + 1
        }))
    }
    resetSetCount = () => {
         this.setState ( {
             setCount: 0
        })
    }
    onChangeSetNumber =(event)=>{
        
        this.setState ( {
             setNumber: parseInt(event.target.value),
        })
    }
    onChangeSetCount =(event)=>{
       
                this.setState ( {
                setCount: parseInt(event.target.value),
        })
    }
    
    
    render() {
        
        return (
            <React.Fragment >
            <div className='container'>
            <nav>Your Lucky Lotto Number Generator</nav>
            <div className='content'>
            <SetLimit 
                decrementHandler={this.decrementSetNumber} incrementHandler={this.incrementSetNumber} 
                value={this.state.setNumber} 
                reset={this.resetInitialValue} 
             onChangeSetNumber={this.onChangeSetNumber}onClickSetNumberInput={this.onClickSetNumberInput}
                 onBlurSetNumberInput={this.onBlurSetNumberInput}
            />
            <Count
                decrementCountHandler={this.decrementSetCount} incrementCountHandler={this.incrementSetCount} value={this.state.setCount} 
                resetCountHandler={this.resetSetCount} onChangeSetCount={this.onChangeSetCount} onClickSetCountInput={this.onClickSetCountInput}
             />
            <RandomGenerator 
                setNumber={this.state.setNumber} 
                setCount={this.state.setCount}
            />
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Lotto
