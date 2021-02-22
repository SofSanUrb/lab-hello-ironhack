import React from 'react'

function Bottom(props) {

    let innerText = ""
    if (props.group1){
        innerText = "React makes it painless to create interactive UIs"
    }
    if (props.group2){
        innerText = "Build encapsulated components that manage their state"
    }
    if (props.group3){
        innerText = "A set of immutable values are passed to the component's"
    }
    if (props.group4){
        innerText = "Statically-typed, designed to run on modern browsers"
    }

    return (
        <React.Fragment>
            <div class='container'>
                <img src={props.image}/>
                <h3>{props.title}</h3>
                <p class="text-grey">{innerText}</p>
            </div>
        </React.Fragment>
    )
}

export default Bottom