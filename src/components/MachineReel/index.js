import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {
	Animated,
	Easing,
	View,
} from 'react-native';

import ReelItem from 'components/ReelItem';

import {useDispatch, useSelector} from 'react-redux';
import {
	selectSlotMachineData,
	stopSpinning,
} from 'state_slices/slotMachineSlice';

import styles from './styles';


MachineReel.propTypes = {
	data: PropTypes.shape({
		items: PropTypes.arrayOf(PropTypes.shape({
			itemName: PropTypes.string
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

	const itemHeight = 95;
	
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
							height={itemHeight}
							width={100}
						/>
					)
				})}
			</Animated.View>
		</View>
	)
}







// import React, {useRef, useEffect} from 'react';
// import PropTypes from 'prop-types';

// import {
// 	Animated,
// 	Easing,
// } from 'react-native';

// import ReelItem from 'components/ReelItem';

// import {useDispatch, useSelector} from 'react-redux';
// import {
// 	selectSlotMachineData,
// 	stopSpinning,
// } from 'state_slices/slotMachineSlice';

// import styles from './styles';


// MachineReel.propTypes = {
// 	data: PropTypes.shape({
// 		items: PropTypes.arrayOf(PropTypes.shape({
// 			itemName: PropTypes.string
// 		})),
// 		reelNumber: PropTypes.number.isRequired,
// 	}).isRequired,
// };
// export default function MachineReel({data}) {
// 	const dispatch = useDispatch();

// 	const {reelNumber} = data;

// 	const {isSpinning, indices} = useSelector(selectSlotMachineData);

// 	const index = indices[reelNumber];

// 	const {items: list} = data;

// 	const itemHeight = 95;

// 	// const renderItem = (item) => {
// 	// 	const {itemName} = item.item;
// 	// 	return (
// 	// 		<ReelItem
// 	// 			itemName={itemName}
// 	// 			height={itemHeight}
// 	// 			width={100}
// 	// 		/>
// 	// 	)
// 	// };
	
// 	const listRef = useRef(null);

// 	const scrollPosition = useRef(new Animated.Value(0));

// 	useEffect(() => {
// 		scrollPosition.current.addListener(animation => {
// 			listRef.current &&
// 				listRef.current?.scrollToOffset({
// 					offset: animation.value,
// 					animated: false,
// 				});
// 		});

// 		return () => scrollPosition.current.removeAllListeners()
// 	}, []);

// 	// useEffect(() => {
// 	// 	scrollPosition.current.addListener(animation => {
// 	// 		listRef.current &&
// 	// 			listRef.current?.scrollToOffset({
// 	// 				offset: animation.value,
// 	// 				animated: false,
// 	// 			});
// 	// 	});

// 	// 	return () => scrollPosition.current.removeAllListeners()
// 	// }, []);

// 	const startAnim = (topOffset, animDuration) => {
// 		// Animated.timing(scrollPosition.current, {
// 		// 	toValue: 0,
// 		// 	duration: 1,
// 		// 	useNativeDriver: true,
// 		// }).start(); //scroll to top

// 		Animated.timing(scrollPosition.current, {
// 			toValue: topOffset,
// 			duration: animDuration,
// 			useNativeDriver: true,
// 			easing: Easing.out(Easing.quad),
// 		}).start();
// 	};


// 	if(isSpinning) {
// 		const topOffset = index * itemHeight - itemHeight;

// 		// const animDuration = index <= 50 ? index * 100 : 5000;
// 		animDuration = 5000;

// 		startAnim(topOffset, animDuration);

// 		setTimeout(() => {
// 			dispatch(stopSpinning());
// 		}, animDuration);
// 	};

// 	return (
// 		<Animated.View
// 			ref={listRef}
// 			style={styles.list, {transform:[{translateY: scrollPosition}]}}
// 			contentContainerStyle={styles.contentContainer}
// 		>
// 			{list.map((item, index) => {
// 				const {itemName} = item;
// 				return (
// 					<ReelItem key={index}
// 						itemName={itemName}
// 						height={itemHeight}
// 						width={100}
// 					/>
// 				)
// 			})}
// 		</Animated.View>
// 	)

// 	// return (
// 	// 	<Animated.FlatList
			
// 	// 		ref={listRef}
// 	// 		style={styles.list}
// 	// 		contentContainerStyle={styles.contentContainer}
// 	// 		data={list}
// 	// 		renderItem={renderItem}
// 	// 		keyExtractor={(_, index) => index.toString()}
// 	// 		// onEndReached={onScrollToEnd}
// 	// 		// onEndReachedThreshold={0.4}
// 	// 		getItemLayout={(data, index) => (
// 	// 			{length: itemHeight, offset: itemHeight * index, index}
// 	// 		)}
// 	// 		maxToRenderPerBatch={30}
// 	// 		updateCellsBatchingPeriod={5}
// 	// 		windowSize={list.length / 6 /*6 = initItems.length */}
// 	// 		initialNumToRender={list.length} //listLength
// 	// 		bounces={false}
// 	// 		scrollEnabled={false}
// 	// 		showsVerticalScrollIndicator={false}
// 	// 	/>
// 	// )
// }