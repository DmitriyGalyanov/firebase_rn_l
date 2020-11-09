import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import {
	TouchableOpacity,
	ImageBackground,
	Animated,
	Image,
} from 'react-native';

import background from './background.png';
import circle from './circle.png';

import styles from './styles';


ToggleButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	isActive: PropTypes.bool.isRequired,
};
export default function ToggleButton({onPress, isActive}) {
	const circleXAnim = useRef(new Animated.Value(isActive ? 50 : 0)).current;

	const changeValueAnim = (target, toValue, duration) => {
		Animated.timing(target, {
			toValue: toValue,
			duration: duration,
			useNativeDriver: false
		}).start();
	};

	const handlePress = () => {
		if (isActive) changeValueAnim(circleXAnim, 0, 500);
		if (!isActive) changeValueAnim(circleXAnim, 50, 500);
		onPress();
	};

	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={handlePress}
		>
			<ImageBackground
				source={background}
				style={styles.wrap}
			>
				<Animated.View
					style={styles.circleWrap,
						{top: -5, left: circleXAnim}}
				>
					<Image
						source={circle}
						style={styles.circle}
					/>
				</Animated.View>
			</ImageBackground>
		</TouchableOpacity>
	)
}