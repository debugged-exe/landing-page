import React from 'react'
import Home from './Home'
import OilCards from './Components/Products/OilCards'
import Spares from './Components/Products/Spares'
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