import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Merchant from './Merchant'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
	<App user={{
    name: 'Kelly An',
    img: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-19/s150x150/18444195_1682191675420613_7692599530251878400_a.jpg',
    username: 'kellyann3644'
  }} />, document.getElementById('accountInfo'));

ReactDOM.render(
	<Merchant list={[
	{ name:'Chanel', follow: true },
	{ name:'Louis Vuitton ', follow: false },
	{ name:'Valentino ', follow: true },
	{ name:'Dior', follow: true },
	{ name:'Gucci ', follow: false },
	{ name:'YSL ', follow: true },
	{ name:'Tom Ford', follow: false },
	{ name:'Chole ', follow: false },
	{ name:'Hermes ', follow: true },
]} />, document.getElementById('merchantList'))
registerServiceWorker();
