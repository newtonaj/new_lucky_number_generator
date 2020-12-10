import React, { Component } from 'react'

 class RandomGenerator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           num: [],
           message: '',
           msgStatus: ""
             
        }
    }
    // get random numbers
    getRandomNumber = (props)=>{
       
        // check whether inputs are set correctly
    if (this.props.setNumber >= this.props.setCount && this.props.setNumber > 0){ 
        if (this.props.setCount > 0){

         let rand = []
        let fig = 0
        this.setState({
        num: rand
    })

     for(let i = 0; rand.length < this.props.setCount; i++){
        fig = (Math.floor(Math.random()* this.props.setNumber + 1))
      if (rand.indexOf(fig)===-1){
          rand.push(fig)
      }
    }
     rand=rand.join(' ')
    this.setState({
            message: "HERE YOU GO CHAMP !!!",
            msgStatus: 'green'
        })
    } else {
        this.setState({
            message: "PLEASE SET HOW MANY POSITIVE NUMBERS YOU WANT TO RECEIVE",
            msgStatus: 'red'
        })
    }
    } else {
        this.setState({
            num : [],
            message: "PLEASE SET A HIGHER LIMIT",
            msgStatus: 'red'
        })
    }
    }
    
    render() {
        return (
            <div>
               <button onClick={this.getRandomNumber}>Click Here To Get Lucky!</button>
            <p className={this.state.msgStatus}>{this.state.message}</p>
            <p>
             {this.state.num.map((n )=> (<span key={n} className={'results'}>{n}</span>))}
            </p>
            </div>
        )
    }
}

export default RandomGenerator
