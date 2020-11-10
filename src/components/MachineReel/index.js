import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {
	TouchableOpacity,
	Animated,
	Text,
	Easing,
} from 'react-native';

import ReelItem from 'components/ReelItem';

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
	const {items} = data;

	const itemHeight = 95;

	const [list, setList] = useState(items);

	const getMoreData = () => {

		setList(list.concat(items));
	};

	const onScrollToEnd = () => {
		getMoreData();
	};

	const renderItem = (item) => {
		const {itemName} = item.item;
		return (
			<ReelItem
				itemName={itemName}
				height={itemHeight}
				width={100}
			/>
		)
	};
	
	const listRef = useRef(null);

	const scrollAnimation = useRef(new Animated.Value(0));

	useEffect(() => {
		scrollAnimation.current.addListener(animation => {
			listRef.current &&
				listRef.current?.scrollToOffset({
					offset: animation.value,
					animated: false,
				});
		});

		return () => scrollAnimation.current.removeAllListeners()
	}, []);

	const testF = () => {
		const index = 5;
		//counts from 0 //will come from RNG

		const topOffset = index * itemHeight - itemHeight;

		let animDuration = 2000;
		if (20 <= index <= 50) {
			animDuration = index * 100;
		}
		if (index > 50) {
			animDuration = 5000;
		}

		Animated.timing(scrollAnimation.current, {
			toValue: topOffset,
			duration: 5000,
			useNativeDriver: true,
			easing: Easing.out(Easing.quad),
		}).start()
	}

	return (
		<>
		<TouchableOpacity onPress={testF} style={{height: 150, width: 70}}>
			<Text>test</Text>
		</TouchableOpacity>
		<Animated.FlatList
			ref={listRef}
			style={styles.list}
			contentContainerStyle={styles.contentContainer}
			data={list}
			renderItem={renderItem}
			keyExtractor={(_, index) => index.toString()}
			// onEndReached={onScrollToEnd}
			// onEndReachedThreshold={0.4}
			getItemLayout={(data, index) => (
				{length: itemHeight, offset: itemHeight * index, index}
			)}
			maxToRenderPerBatch={30}
			updateCellsBatchingPeriod={5}
			windowSize={31}
			initialNumToRender={180}
		/>
		</>
	)
}