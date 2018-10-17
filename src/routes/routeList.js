// @flow

import React from 'react';
import {Text, View} from 'react-native';

const Default = () => (
  <View>
    <Text>Open up src/App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
  </View>
);
const About = () => (
  <View>
    <Text>Open up src/App.js to start working on your app!</Text>
    <Text style={{fontSize: 50}}>About</Text>
  </View>
);
const Products = () => (
  <View>
    <Text>Open up src/App.js to start working on your app!</Text>
    <Text style={{fontSize: 50}}>Products</Text>
  </View>
);
const Service = () => (
  <View>
    <Text>Open up src/App.js to start working on your app!</Text>
    <Text style={{fontSize: 50}}>Services</Text>
  </View>
);
const Contact = () => (
  <View>
    <Text>Open up src/App.js to start working on your app!</Text>
    <Text style={{fontSize: 50}}>Contact</Text>
  </View>
);
// TODO: fix this

export const ROUTE_LIST = [
  {
    title: 'Home',
    path: '/',
    component: Default,
  },
  {
    title: 'About Us',
    path: '/about-us',
    component: About,
  },
  {
    title: 'Products',
    path: '/products',
    component: Products,
  },
  {
    title: 'Services',
    path: '/services',
    component: Service,
  },
  {
    title: 'Contact',
    path: '/contact',
    component: Contact,
  },
];

export const MENU_BAR = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'About Us',
    path: '/about-us',
  },
  {
    text: 'Products',
    path: '/products',
  },
  {
    text: 'Services',
    path: '/services',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
];
