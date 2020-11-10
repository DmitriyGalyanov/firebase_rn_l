const initItems = [
	{
		itemName: '777',
	},
	{
		itemName: 'bananas',
	},
	{
		itemName: 'cherry',
	},
	{
		itemName: 'strawberry',
	},
	{
		itemName: 'tomato',
	},
	{
		itemName: 'watermelon',
	},
];

function getBigList() {
	let items = [];

	for (let i = 0; i < 30; i++) { //70
		items = items.concat(initItems);
	}

	return items;
};

const items = getBigList();

export default items;