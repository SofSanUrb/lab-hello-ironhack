import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Bottom from './components/Bottom.js'
import './components/Bottom.css'

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <section className="section1">
                    <div className="navbar">
                        <img src="./images/ironhack-logo.svg"/>
                        <img src="./images/menu-top.svg"/>
                    </div>
                    <div className="maintitle">
                        <h1>Say hello to ReactJs</h1>
                        <p>You will learn how to use the most popular frontend library and become a super Ninja developer</p>
                        <button>Awesome!</button>                   
                    </div>
                </section>
                <section className="section2">
                    <Bottom image="./images/icon1.png" title="Declarative" group1/>
                    <Bottom image="./images/icon2.png" title="Components" group2/>
                    <Bottom image="./images/icon3.png" title="Single-Way" group3/>
                    <Bottom image="./images/icon4.png" title="JSX" group4/>
                </section>
            </React.Fragment>
        )
    }
}

ReactDOM.render( <App /> , document.querySelector('#root') )
