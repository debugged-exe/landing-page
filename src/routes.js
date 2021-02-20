import React from 'react'
import Home from './Home'
import Spares from './Components/Products/Spares'
import PrivacyPolicy from './Components/Privacy/PrivacyPolicy'

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
