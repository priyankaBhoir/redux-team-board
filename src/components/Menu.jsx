import React, {Component} from 'react';
import PropTypes from 'prop-types'
import enhanceWithClickOutside from 'react-click-outside';

const MenuItem = (props) => {
	const a = (e) => {
		props.selectMenu();
	}
	return <li className={props.className} onClick={a}>
		{props.children}
	</li>
}

class Menu extends Component {
	static propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    type: 'buttonMenu'
  }

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	handleClickOutside = () => {
    this.setState({
			isOpen: false
		})
  }

	toggleMenu = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	getMenuHeader() {
		return this.props.type === 'iconMenu' ?
			<i onClick={this.toggleMenu} className="material-icons">more_vert</i> :
			<button onClick={this.toggleMenu} className="menu-btn">{this.props.title} <i className="material-icons">expand_more</i></button>
	}

	render() {
		const menuClass = this.props.className ? `${this.props.className} menu` : 'menu';
		return <div className={menuClass}>
		  {this.getMenuHeader()}
		  {this.state.isOpen && <ul className="menu-content">
		   	{this.props.children}
		  </ul>}
		</div>
	}
}

export default enhanceWithClickOutside(Menu);

export {
	MenuItem
}