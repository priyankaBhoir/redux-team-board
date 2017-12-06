import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter} from 'react-router-dom';

// import Styles from './Sidebar.css';
import './Sidebar.css';
const Links = [{
  name: 'Home',
  path: '/'
},{
  name: 'Team Members',
  path: '/team'
},{
  name: 'Analytics',
  path: '/analytics',
  disabled: true
},{
  name: 'Settings',
  path: '/settings',
  disabled: true
}];

export class Sidebar extends Component {
  renderLinks() {
    return Links.map((link, i) => {
      return <li key={i} className={link.path === this.props.activePage ? 'active' : ''}>
        {link.disabled ? <span>{link.name}</span> :  <Link to={link.path}>{link.name}</Link>}
      </li>
    })
  }

  render() {
    return (
      <aside className='sidebar'>
        <div className="logo">
          <div className="combined-Shape">o/m</div>
          <Link to="/">App <br /> Dashboard </Link>
        </div>
        <ul>
         {this.renderLinks()}
        </ul>
      </aside>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    activePage: props.location.pathname
  }
}
export default withRouter(connect(mapStateToProps, {})(Sidebar))