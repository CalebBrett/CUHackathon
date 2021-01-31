import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('be67d4c06b2b4aa09d16c1b89de1b4ec');
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});

class Document extends React.Component
{
	render()
	{
		return(
			<div className="document">
				<Header />
				<Content />
			</div>
		);
	}
}

class Header extends React.Component
{
	render()
	{
		return(
			<div className="header">
				hello this is head
			</div>
		);
	}
}

class Content extends React.Component
{

	showCreator()
	{
		var creator = document.getElementById('creator');
		creator.style.visibility = "visible"; 
		var user = document.getElementById('user');
		user.style.visibility = "hidden";
	}
	showUser()
	{
		var creator = document.getElementById('creator');
		creator.style.visibility = "hidden"; 
		var user = document.getElementById('user');
		user.style.visibility = "visible";
	}

	rss()
	{
	}

	render()
	{
		return(
			<div className="content">
				<div id="creator">
					<div id="cChat">
						Chat
					</div>
					<div id="cAnswer">
						answer
					</div>
					<div id="cQuestion">
						Questions
					</div>
					<div id="cDono">
						Dono
					</div>
				</div>
				<div id="user">
					<div id="uChat">
						chat
					</div>
					<div id="uQuestion">
						questio
					</div>
					<div id="uDono">
					Donodono
					</div>
					<div id="uGame">
						game
					</div>
				</div>
				<button onClick={this.showCreator}>Creator</button>
				<button onClick={this.showUser}>User</button>
				<button onClick={this.rss}>RSS</button>
			</div>
		);
	}
}

ReactDOM.render(
  <Document />,
  document.getElementById('root')
);