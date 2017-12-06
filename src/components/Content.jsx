import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu, {MenuItem} from './Menu';

export default class Content extends Component {
  static propTypes = {
    members: PropTypes.array.isRequired,
    deleteMember: PropTypes.func.isRequired,
    editMember: PropTypes.func.isRequired,
    toggleSort: PropTypes.func.isRequired
  }

  sortByName = () => {
    this.props.toggleSort('name');
  }

  sortByCompany = () => {
    this.props.toggleSort('company');
  }

  getSortIcon() {
    return (this.props.sortType === 'asc' ? 
      <span><i className="material-icons list-icon">arrow_upward</i> </span> :
      <span><i className="material-icons list-icon">arrow_downward</i></span>);
  }

  renderMemberList() {

    return <ul className="team-list">
      <li className="team-list__item" >
        <div className="team-list__item__col check"></div>
        <div className="team-list__item__col name" onClick={this.sortByName}>
          Name {this.props.sortBy === 'name' && this.getSortIcon()}
        </div>
        <div className="team-list__item__col company" onClick={this.sortByCompany}>
          Company {this.props.sortBy === 'company' && this.getSortIcon()}
        </div>
        <div className="team-list__item__col status">Status</div>
        <div className="team-list__item__col modified">Last Updated</div>
        <div className="team-list__item__col note">Notes</div>
        <div className="team-list__item__col action"></div>
      </li>
     {this.props.members.map((member, i) => {
      return (
        <li className="team-list__item" key={i}>
          <div className="team-list__item__col check"><input type="checkbox" /></div>
          <div className="team-list__item__col name">{member.name}</div>
          <div className="team-list__item__col company">{member.company}</div>
          <div className="team-list__item__col status">{member.status}</div>
          <div className="team-list__item__col modified">{new Date(member.lastUpdated).toLocaleDateString()}</div>
          <div className="team-list__item__col note">{member.notes}</div>
          <div className="team-list__item__col action">
            <Menu type="iconMenu">
              <MenuItem selectMenu={() => this.props.deleteMember(member.id)}>
                <i className="material-icons list-icon">delete</i>  Delete 
              </MenuItem>
              <MenuItem selectMenu={() => this.props.editMember(member)}>
                <i className="material-icons list-icon">edit</i>Edit
              </MenuItem>
            </Menu>
          </div>

        </li>
      )
    })}
    </ul>
  }

  render() {
    return (
      <div className="content">
        {this.renderMemberList()}
      </div>
    )
  }
}