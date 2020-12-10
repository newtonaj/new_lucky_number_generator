import React, { Component } from 'react'

 class Count extends Component {
     constructor(props) {
         super(props)
         this.state= {}
     }
     
    
    render() {
        const {decrementCountHandler, onClickSetCountInput, value, onChangeSetCount, incrementCountHandler, resetCountHandler} = this.props
    return (
        <div >
            <p className='center2'>How many numbers should be returned? 
            <span className='blue'>ex: 4</span>
            </p>
            
            <button onClick={decrementCountHandler} className="btn">
                -
            </button>
           <input 
                type='number' 
                onClick={onClickSetCountInput} className='displayNumber' 
                value={value}
                onChange={onChangeSetCount}
           />
            <button className="btn" onClick={incrementCountHandler}>
                +
            </button>
            <button className="btn" onClick={resetCountHandler}>
                Reset
            </button>
        </div>
        
    )
}
}

export default Count


    
 

