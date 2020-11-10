export const initItems = [
	{
		itemName: '777',
		initIndex: 0,
	},
	{
		itemName: 'bananas',
		initIndex: 1,
	},
	{
		itemName: 'cherry',
		initIndex: 2,
	},
	{
		itemName: 'strawberry',
		initIndex: 3,
	},
	{
		itemName: 'tomato',
		initIndex: 4,
	},
	{
		itemName: 'watermelon',
		initIndex: 5,
	},
];

function getBigList() {
	let items = [];

	for (let i = 0; i < 30; i++) { //listLength === 180
		items = items.concat(initItems);
	}

	return items;
};

const items = getBigList();

export default items;