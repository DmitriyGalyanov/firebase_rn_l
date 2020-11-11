import {Dimensions} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const reelsAmount = 3;

const reelWidth = (windowWidth - 22 * reelsAmount)
	/ reelsAmount;
//(22 * reelsAmount) regulates gaps between reels

const reelItemWidth = reelWidth - 16; //16 = reel horizontal padding * 2

const reelItemImgAspectRatio = 1.035714285714286;

const reelItemHeight = reelItemWidth / reelItemImgAspectRatio;

const constants = {
	WINDOW_WIDTH: windowWidth,
	WINDOW_HEIGHT: windowHeight,
	REELS_AMOUNT: reelsAmount,
	REEL_WIDTH: reelWidth,
	REEL_ITEM_WIDTH: reelItemWidth,
	REEL_ITEM_HEIGHT: reelItemHeight,
};

export {
	windowWidth as WINDOW_WIDTH,
	windowHeight as WINDOW_HEIGHT,
	reelsAmount as REELS_AMOUNT,
	reelWidth as REEL_WIDTH,
	reelItemWidth as REEL_ITEM_WIDTH,
	reelItemHeight as REEL_ITEM_HEIGHT,
};

export default constants;