import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    })

    return (
        <div className="container">
            <h5 style={{ textAlign: 'center' }}>Please confirm your entries</h5>
            <div>
                {reviewFields}
            </div>
            <button className="yellow darken-3 btn-flat left white-text" onClick={onCancel}><i className="material-icons left">arrow_back</i> Back</button>
            <button type="submit" onClick={() => submitSurvey(formValues)} className="teal btn-flat right white-text waves-effect">Send Survey<i className="material-icons right">email</i></button>
        </div>
    );
}

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);