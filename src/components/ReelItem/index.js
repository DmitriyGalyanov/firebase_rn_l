import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Image,
} from 'react-native';

import styles from './styles';

ReelItem.propTypes = {
	itemName: PropTypes.string.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
};
export default function ReelItem({itemName, height, width}) {

	let pathToImg = null;

	switch (itemName) {
		case '777': pathToImg = require('./777.png'); break;
		case 'bananas': pathToImg = require('./bananas.png'); break;
		case 'cherry': pathToImg = require('./cherry.png'); break;
		case 'strawberry': pathToImg = require('./strawberry.png'); break;
		case 'tomato': pathToImg = require('./tomato.png'); break;
		case 'watermelon': pathToImg = require('./watermelon.png'); break;
		default: pathToImg = null;
	};

	return (
		<View style={styles.wrap}>
			<Image
				source={pathToImg}
				style={{
					height: height ?? 60,
					width: width ?? 65
				}}
			/>
		</View>
	)
}