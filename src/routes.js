import React from 'react'
import Home from './Home'
import OilCards from './Components/Products/OilCards'
import Spares from './Components/Products/Spares'
import PrivacyPolicy from './Components/Privacy/PrivacyPolicy'
import Productdets from './Components/Products/Productdets';

export const ROUTES = [
	{
		name: 'Home',
		path: '/',
		component: <Home />
	},
	{
		name: 'Spares',
		path: '/spares',
		component: <Spares/>
    },
    {
		name: 'Privacy Policy',
		path: '/privacy',
		component: <PrivacyPolicy/>
	}
];
