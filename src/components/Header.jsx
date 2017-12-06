
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterMenu from './FilterMenu';
import Pagination from './Pagination';

export default class Header extends Component {
  static propTypes = {
    openMemberModal: PropTypes.func.isRequired,
    onCompanyFilterChange: PropTypes.func.isRequired,
    onStatusFilterChange: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    totalItems: PropTypes.number.isRequired,
    allCompanies: PropTypes.array.isRequired,
    allStatus: PropTypes.array.isRequired
  }


  renderPagination() {
    return <Pagination  
      currentPage={this.props.currentPage}
      totalItems={this.props.totalItems}
      pageSize={this.props.pageSize}
      onPageChange={this.props.onPageChange}
    />
  }

  render() {
    return (
      <div className="header">
        <div className="main-header">
          <h1>Team Members</h1>
          <button className="round-btn" onClick={this.props.openMemberModal}>Add Member + </button>
        </div>
        <div className="sub-header">
          <div className="filter-section">
            <FilterMenu
              title="Companies"
              selected={this.props.companyFilters}
              list={this.props.allCompanies}
              onUpdate={this.props.onCompanyFilterChange} />

            <FilterMenu
              title="status"
              selected={this.props.statusFilters}
              list={this.props.allStatus}
              onUpdate={this.props.onStatusFilterChange} />
          </div>
          <div className="pagnation-section">
            {this.renderPagination()}
          </div>
        </div>
      </div>
    )
  }
}