import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addMember, updateCompanyFilter, updateStatusFilter, 
  updatePage, deleteMember, updateMember, showModal, hideModal, toggleSort} from '../../actions'
import Header from '../../components/Header';
import Content from '../../components/Content';
import MemberModal from '../../components/MemberModal';
import {STATUS} from '../../constants/status';

import './Team.css';

const getFilteredMembers = (members, filters) => {
  return members.filter(member => filters.companyFilters.length ?  filters.companyFilters.includes(member.company) : true)
    .filter(member => filters.statusFilters.length ?  filters.statusFilters.includes(member.status) : true)
    .sort((a,b) => filters.sortType === 'asc' ? a[filters.sortBy].localeCompare(b[filters.sortBy]) : b[filters.sortBy].localeCompare(a[filters.sortBy]))
}

const getCurrentPageMembers = (filteredMembers, currentPage, pageSize) => {
  const startIndex = (currentPage * pageSize);
  const endIndex = (currentPage + 1) * pageSize > filteredMembers.length ? filteredMembers.length : (currentPage + 1) * pageSize;
  return filteredMembers.slice(startIndex, endIndex);
}


class Team extends Component {
  static propTypes = {
    members: PropTypes.array.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    totalItems: PropTypes.number,
    allStatus: PropTypes.array,
    allCompanies: PropTypes.array,
    onAddMember: PropTypes.func,
    updateCompanyFilter: PropTypes.func,
    updateStatusFilter: PropTypes.func,
    updatePage: PropTypes.func
  }

  openMemberModal = (member) => {
    this.props.showModal(member);
  }

  openAddMemberModal = () => {
    this.props.showModal();
  }

  saveMember = (member) => {
    if(!member.id) this.props.addMember(member);
    else this.props.updateMember(member);
  }

  render() {
    const { members } = this.props;
    return (
      <div className="members-container">
        <Header 
          openMemberModal={this.openAddMemberModal}
          onCompanyFilterChange={this.props.updateCompanyFilter}
          onStatusFilterChange={this.props.updateStatusFilter}
          onPageChange={this.props.updatePage}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalItems={this.props.totalItems}
          allCompanies={this.props.allCompanies}
          allStatus={this.props.allStatus}
          companyFilters={this.props.companyFilters}
          statusFilters={this.props.statusFilters}
        />
        <Content 
          members={members}
          deleteMember={this.props.deleteMember}
          editMember={this.openMemberModal}
          toggleSort={this.props.toggleSort}
          sortBy={this.props.sortBy}
          sortType={this.props.sortType}
          />
        <MemberModal 
          isShowing={this.props.isShowing}
          hideModal={this.props.hideModal}
          onSave={this.saveMember}
          {...this.props.modalProps}
          />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const {
    members,
    currentPage,
    pageSize
  } = state.team;

  const {
    companyFilters,
    statusFilters,
  } = state.filters;
  
  const allCompanies = members.map(member => member.company)
    .filter((company, i) => members.findIndex(m => m.company === company) === i);

  const allStatus = STATUS;
  const filteredMembers = getFilteredMembers(members, state.filters);

  const page = getCurrentPageMembers(filteredMembers, currentPage, pageSize);
  return {
    members: page,
    totalItems: filteredMembers.length,
    currentPage,
    pageSize,
    allStatus,
    allCompanies,
    companyFilters,
    statusFilters,
    sortBy: state.filters.sortBy,
    sortType: state.filters.sortType,
    isShowing: state.modals.showModel,
    modalProps: state.modals.modalProps
  }
}

export default withRouter(connect(mapStateToProps, {
  addMember, 
  updateCompanyFilter, 
  updateStatusFilter, 
  updatePage, 
  deleteMember, 
  updateMember,
  showModal,
  hideModal,
  toggleSort
})(Team))