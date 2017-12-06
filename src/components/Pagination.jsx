import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Pagination extends Component {
  static propTypes = {
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
  }

  goToPrevPage = () => {
    this.props.currentPage && this.props.onPageChange(this.props.currentPage - 1);
  }

  goToNextPage = () => {
    if((this.props.currentPage + 1) * this.props.pageSize < this.props.totalItems) {
     this.props.onPageChange(this.props.currentPage + 1);
    }
  }

  render() {
    const {
      totalItems,
      currentPage,
      pageSize
    } = this.props;
    console.log(totalItems, pageSize)
    if (totalItems < pageSize) {
      // don't display pager if there is only 1 page
      return null;
    }

    const startIndex = (currentPage * pageSize) + 1;
    const endIndex = (currentPage + 1) * pageSize > totalItems ? totalItems : (currentPage + 1) * pageSize;
    const leftNavCls = startIndex === 1 ? 'pagination__controls--left disabled' : 'pagination__controls--left';
    const rightNavCls = endIndex === totalItems ? 'pagination__controls--right disabled' : 'pagination__controls--right';
    return (
      <div className="pagination">
        <div className="pagination__current-view">
          viewing <b> {startIndex}-{endIndex} </b> of <b> {totalItems}</b>
        </div>
        <div className="pagination__controls">
          <div className={leftNavCls} onClick={this.goToPrevPage}><i className="material-icons">chevron_left</i></div>
          <div className={rightNavCls} onClick={this.goToNextPage}><i className="material-icons">chevron_right</i></div>
        </div>
      </div>
    );
  }
}