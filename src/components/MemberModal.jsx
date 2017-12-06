import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import {STATUS} from '../constants/status';

const StatusOptions = STATUS.map(s => ({value: s, label: s}));

export default class MemberModal extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    isShowing: PropTypes.bool.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
    status: PropTypes.string,
    notes: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = this.setIntialState(props);
  }

  setIntialState(props) {
    //assigning values default to empty string, 
    //otherwise those input elements are considered as uncontrolled elements
    return {
      id: props.id,
      name: props.name || '',
      company: props.company || '',
      status: props.status || StatusOptions[0].value,
      notes: props.notes || ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.id !== nextProps.id) {
      this.setState(this.setIntialState(nextProps))
    }
  }

  inputChange = (key) => (e) => {
    const value = e.target.value;

    this.setState({
      [key]: value
    })
  }

  handleSave = () => {
    this.props.onSave(this.state);
    this.props.hideModal()
  }

  render() {
    const btnLabel = this.props.id ? "Update" : "Add member";
    return (
      <ReactModal
        isOpen={this.props.isShowing}
        onRequestClose={this.props.hideModal}
        overlayClassName="board-overlay"
        className="member-modal" 
        ariaHideApp={false}>
        <div className="modal-container">
          <div className="cls-btn" onClick={this.props.hideModal}> <i className="material-icons">close</i> </div>
          <div className="form-item"> 
            <p>Name </p>
            <input type="text" value={this.state.name} onChange={this.inputChange('name')}/>
          </div>
          <div className="form-item">
            <p>Company </p>
            <input type="text" value={this.state.company} onChange={this.inputChange('company')}/>
          </div>
          <div className="form-item">
            <p>Status </p>
            <select name="form-field-name" onChange={this.inputChange('status')} value={this.state.status}>
              {StatusOptions.map((opt, key) => {
                return opt.value === this.state.status ? 
                  <option key={key} value={opt.value}>{opt.label} </option> :
                  <option key={key} value={opt.value}>{opt.label} </option>
              })
              }
            </select>
          </div>
          <div className="form-item">
            <p>Note </p>
            <textarea  value={this.state.notes} onChange={this.inputChange('notes')}/>
          </div>

          <div className="form-action">
            <button className="submit" onClick={this.handleSave}>{btnLabel}</button>
          </div>
        </div>
      </ReactModal>
    )
  }
}