import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
    render() {
        return(
            <div>
                <h1 style={{ textAlign: 'center' }}>Survey New</h1>
                <SurveyForm />
            </div>
    )    
    }
}

export default SurveyNew;