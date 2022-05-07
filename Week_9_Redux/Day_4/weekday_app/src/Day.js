import React from "react";
import './Day.css';
import { connect } from 'react-redux';

//new
import { forwardAsync } from "./actions";


const Day = (props) => {

    const handleSubmit = event => {
        event.preventDefault();
        const button = event.target.dataset.button
        const day = event.target.parentElement.firstElementChild.dataset.day

        switch (button) {
            case "next":
                props.next(day)
                break;
            default:
                console.log("wrong button")
        }
    }

    return (
        <>
            <h1 data-day={props.weekday}>Today is <span>{props.weekday}</span></h1>
            <button type="submit" onClick={handleSubmit} data-button="next">Go forward in the week</button>
        </>
    );
};


const mapStateToProps = (state) => {
    return { weekday: state.weekday };
};

const mapDispatchToProps = dispatch => {
    return {
        next: (day) => {
            //new
            dispatch(forwardAsync(day))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Day);