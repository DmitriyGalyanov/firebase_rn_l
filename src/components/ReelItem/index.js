import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Image,
} from 'react-native';

import images from '../../imgs/images';

import styles from './styles';

ReelItem.propTypes = {
	itemName: PropTypes.string.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
};
export default function ReelItem({itemName, height, width}) {

	let pathToImg = null;

	const getImage = () => {
		switch (itemName) {
			case '777': return images[777]; break;
			case 'bananas': return images.bananas; break;
			case 'cherry': return images.cherry; break;
			case 'strawberry': return images.strawberry; break;
			case 'tomato': return images.tomato; break;
			case 'watermelon': return images.watermelon; break;
			default: pathToImg = null;
		};
	}

	// switch (itemName) {
	// 	case '777': pathToImg = require('./777.png'); break;
	// 	case 'bananas': pathToImg = require('./bananas.png'); break;
	// 	case 'cherry': pathToImg = require('./cherry.png'); break;
	// 	case 'strawberry': pathToImg = require('./strawberry.png'); break;
	// 	case 'tomato': pathToImg = require('./tomato.png'); break;
	// 	case 'watermelon': pathToImg = require('./watermelon.png'); break;
	// 	default: pathToImg = null;
	// };

	const img = getImage();

	return (
		<View style={styles.wrap}>
			<Image
				// source={pathToImg}
				source={img}
				style={{
					height: height ?? 60,
					width: width ?? 65
				}}
			/>
		</View>
	)
}