import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: this.props.time,
            timerActive: false,
            input: '',
        }
    this.inputChange = this.inputChange.bind(this);
    }

    timer = () => { // таймер
        if(!this.state.timerActive) {
            this.setState({
                timerActive: true,
                time: this.props.time
            });

            let timeLeft = setInterval( () =>{
                let newTime = this.state.time - 1;
                this.setState({time: newTime});
                if (newTime === 0) { // если время вышло
                    clearInterval(timeLeft);
                    this.setState({
                        timerActive: false,      
                    });
                    let chance = window.confirm('Упс! Время вышло. Попробовать снова?');
                    if (chance) {
                        this.setState({input: ''})
                    }
                    else {
                        alert('Жаль! Будем рады видеть вас снова!');
                    }

                }
            }, 1000);
        }
        return false;
    }
    
    inputChange(text) { // обрабатываем поле ввода
        this.setState({input: text.target.value});
        console.log(this.state.input);
        // console.log(this.state.text);
    }

    render() {
        return (
        <div>
            <div><strong>Осталось времени: {this.state.time}</strong></div>
            <div>Пиши сюда: 
                <input type="text" autoComplete="off" onInput={this.timer} value={this.state.input}
                onChange={this.inputChange}/>
            </div>
        </div>)
    }
}
export default Timer;