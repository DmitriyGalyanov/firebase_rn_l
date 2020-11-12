import {Dimensions} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const reelsAmount = 3;

const reelWidth = (windowWidth - 22 * reelsAmount) / reelsAmount;
//(22 * reelsAmount) regulates gaps between reels

const reelItemWidth = reelWidth - 16; //16 = reel horizontal padding * 2
const reelItemImgAspectRatio = 1.035714285714286;
const reelItemHeight = reelItemWidth / reelItemImgAspectRatio;

const windowWidthToSpinButtonWidthRatio = 2.285714285714286;
const spinButtonWidth = windowWidth / windowWidthToSpinButtonWidthRatio;
const spinButtonHeight = spinButtonWidth;

const windowWidthToBetCountWidthRatio = 3.428571428571428;
const betCountWidth = windowWidth / windowWidthToBetCountWidthRatio;
const betCountAspectRatio = 1.50210970464135;
const betCountHeight = betCountWidth / betCountAspectRatio;

const betCountToBetButtonWidthRatio = 2.666666666666667;
const betButtonWidth = betCountWidth / betCountToBetButtonWidthRatio;
const betButtonHeight = betButtonWidth;

// const bundleName = 'com.firebase_rn_l';
const bundleName = 'com.test.test';
const appsflyerDevKey = 'tzTMezPNAAJ2jKPjNJezui';

const intentFilterScheme = 'test.test://';


const constants = {
	WINDOW_WIDTH: windowWidth,
	WINDOW_HEIGHT: windowHeight,
	REELS_AMOUNT: reelsAmount,
	REEL_WIDTH: reelWidth,
	REEL_ITEM_WIDTH: reelItemWidth,
	REEL_ITEM_HEIGHT: reelItemHeight,
	SPIN_BUTTON_WIDTH: spinButtonWidth,
	SPIN_BUTTON_HEIGHT: spinButtonHeight,
	BET_COUNT_WIDTH: betCountWidth,
	BET_COUNT_HEIGHT: betCountHeight,
	BET_BUTTON_WIDTH: betButtonWidth,
	BET_BUTTON_HEIGHT: betButtonHeight,
	appsflyerDevKey,
	bundleName,
	intentFilterScheme,
};

export {
	windowWidth as WINDOW_WIDTH,
	windowHeight as WINDOW_HEIGHT,
	reelsAmount as REELS_AMOUNT,
	reelWidth as REEL_WIDTH,
	reelItemWidth as REEL_ITEM_WIDTH,
	reelItemHeight as REEL_ITEM_HEIGHT,
	spinButtonWidth as SPIN_BUTTON_WIDTH,
	spinButtonHeight as SPIN_BUTTON_HEIGHT,
	betCountWidth as BET_COUNT_WIDTH,
	betCountHeight as BET_COUNT_HEIGHT,
	betButtonWidth as BET_BUTTON_WIDTH,
	betButtonWidth as BET_BUTTON_HEIGHT,
	appsflyerDevKey,
	bundleName,
	intentFilterScheme,
};

export default constants;