import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Image,
} from 'react-native';

import images from 'reel_item_imgs/images';

import styles from './styles';

ReelItem.propTypes = {
	itemName: PropTypes.string.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
};
export default function ReelItem({itemName, height, width}) {

	const getImage = () => {
		switch (itemName) {
			case '777': return images[777];
			case 'bananas': return images.bananas;
			case 'cherry': return images.cherry;
			case 'strawberry': return images.strawberry;
			case 'tomato': return images.tomato;
			case 'watermelon': return images.watermelon;
			default: return images[777]; //don't have a placeholder
		};
	};

	const img = getImage();

	return (
		<View style={styles.wrap}>
			<Image
				source={img}
				style={{
					height: height ?? 60,
					width: width ?? 65
				}}
			/>
		</View>
	)
}