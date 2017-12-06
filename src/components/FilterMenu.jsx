import React from 'react';
import PropTypes from 'prop-types'
import Menu, {MenuItem} from './Menu';

const FilterMenu = (props) => {
	const selectMenu = (listitem) => {
		let selected = props.selected.includes(listitem) ? 
			props.selected.filter(item => item !== listitem) :
			props.selected.concat(listitem);
		
		props.onUpdate(selected);
	}

	return (
		<Menu 
			title={`${props.title} (${props.selected.length})`}>

			{props.list.map((listitem, i) => {
				return <MenuItem key={i} selectMenu={() => selectMenu(listitem)}> 
					<span >
	        	<input type="checkbox" id={listitem} checked={props.selected.includes(listitem)} />
	        	{listitem}
	        </span>
				</MenuItem>
			})}
	</Menu>)
}

FilterMenu.propTypes = {
	selected: PropTypes.array,
	list: PropTypes.array,
	title: PropTypes.string
}

export default FilterMenu;