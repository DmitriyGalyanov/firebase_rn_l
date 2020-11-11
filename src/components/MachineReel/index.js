import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Animated,
	Easing,
} from 'react-native';

import ReelItem from 'components/ReelItem';

import {useDispatch, useSelector} from 'react-redux';
import {
	selectSlotMachineData,
	stopSpinning,
} from 'state_slices/slotMachineSlice';

import {
	REEL_ITEM_WIDTH,
	REEL_ITEM_HEIGHT,
} from '../../constants';

import styles from './styles';


MachineReel.propTypes = {
	data: PropTypes.shape({
		items: PropTypes.arrayOf(PropTypes.shape({
			itemName: PropTypes.string,
		})),
		reelNumber: PropTypes.number.isRequired,
	}).isRequired,
};
export default function MachineReel({data}) {
	const dispatch = useDispatch();

	const {reelNumber} = data;

	const {isSpinning, indices} = useSelector(selectSlotMachineData);

	const index = indices[reelNumber];

	const {items: list} = data;

	const itemHeight = REEL_ITEM_HEIGHT;
	
	const listRef = useRef(null);

	const scrollPosition = useRef(new Animated.Value(0));

	const startAnim = (topOffset, animDuration) => {
		Animated.timing(scrollPosition.current, {
			toValue: -topOffset,
			duration: animDuration,
			useNativeDriver: true,
			easing: Easing.out(Easing.quad),
		}).start();
	};

	if(isSpinning) {
		const topOffset = index * itemHeight - itemHeight;

		const animDuration = 5000;

		startAnim(topOffset, animDuration);

		setTimeout(() => {
			dispatch(stopSpinning());
		}, animDuration);
	};

	return (
		<View style={{height: (itemHeight + 1.5) * 3, overflow: 'hidden'}}>
			<Animated.View
				ref={listRef}
				style={
					[styles.list,
					{transform: [{translateY: scrollPosition?.current}]}]
				}
				contentContainerStyle={styles.contentContainer}
			>
				{list.map((item, index) => {
					const {itemName} = item;
					return (
						<ReelItem key={index}
							itemName={itemName}
							// height={itemHeight}
							// width={100}
							height={REEL_ITEM_HEIGHT}
							width={REEL_ITEM_WIDTH}
						/>
					)
				})}
			</Animated.View>
		</View>
	)
}