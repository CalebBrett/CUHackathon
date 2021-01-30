import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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


	render()
	{
		return(
			<div className="content">
				<div id="creator">
					<div id="ChatViewer">
						Chat
					</div>
					<div id="AnswerViewer">
						answer
					</div>
					<div id="AddQuestions">
						Questions
					</div>
					<div id="SetupDonate">
						Dono
					</div>
				</div>
				<div id="user">
					<div id="Chat">
						chat
					</div>
					<div id="Questions">
						questio
					</div>
					<div id="Donations">
					Donodono
					</div>
					<div id="Game">
						game
					</div>
				</div>
				<button onClick={this.showCreator}>Creator</button>
				<button onClick={this.showUser}>User</button>
			</div>
		);
	}
}

ReactDOM.render(
  <Document />,
  document.getElementById('root')
);