import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
	{
		title: 'what is your name?',
		content: 'My name is Kshitij Shah',
	},
	{
		title: 'How old are you?',
		content: 'I am 25 years old',
	},
	{
		title: 'Where do you live?',
		content: 'I live in Fullerton, California',
	},
];

const options = [
	{
		label: 'Hindi',
		value: 'hi',
	},
	{
		label: 'Arabic',
		value: 'ar',
	},
	{
		label: 'Afrikaans',
		value: 'af',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/search'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
					label='Select a label'
				/>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
};

export default App;
