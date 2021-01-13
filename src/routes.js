import React from 'react'
import Home from './Home'
import OilCards from './Components/Products/OilCards'
import PrivacyPolicy from './Components/Privacy/PrivacyPolicy'

export const ROUTES = [
	{
		name: 'Home',
		path: '/',
		component: <Home />
	},
	{
		name: 'Products',
		path: '/products',
		component: <OilCards/>
    },
    {
		name: 'Privacy Policy',
		path: '/privacy',
		component: <PrivacyPolicy/>
	}
];