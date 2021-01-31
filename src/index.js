import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Document extends React.Component
{
	render()
	{
		return(
			<div className="document">
				<Content />
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

		var signin = document.getElementById('signin');
		signin.style.visibility = "hidden";	
		signin.style.position = "absolute";	
	}
	showUser()
	{
		var creator = document.getElementById('creator');
		creator.style.visibility = "hidden"; 
		var user = document.getElementById('user');
		user.style.visibility = "visible";

		var signin = document.getElementById('signin');
		signin.style.visibility = "hidden";		
		signin.style.position = "absolute";	
	}

	signup()
	{
		var modal = document.getElementById("myModal");
		modal.style.display = "block";
	}

	closeSignup()
	{
		var modal = document.getElementById("myModal");
		modal.style.display = "none";
	}

	back()
	{
		var creator = document.getElementById('creator');
		creator.style.visibility = "hidden"; 
		var user = document.getElementById('user');
		user.style.visibility = "hidden";

		var signin = document.getElementById('signin');
		signin.style.visibility = "visible";		
		signin.style.position = "static";	
	}

	rss()
	{
		var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=be67d4c06b2b4aa09d16c1b89de1b4ec';
		var req = new Request(url);
		fetch(req)
		    .then(function(response) {
		        console.log(response.json());
		    })
	}

	render()
	{
		return(
			<div className="content">
				<div id="creator">
					<div id="cChat">
						<p>Chat feed</p>
						<input type="text" placeholder="Josh:"/><div></div>
						<input type="text" placeholder="Emily:"/><div></div>
						<input type="text" placeholder="Bob:"/> <div></div>
						<input type="text" placeholder="..."/>
					</div>
					<div id="cAnswer">
						<p>Answers</p>
						Question #1:<div></div>
						Question #2:<div></div>
						Question #3:
					</div>
					<div id="cQuestion">
						<p>Make Questions</p>
						<button onClick={this.rss}>Generate RSS feed questions</button><div></div>
						<input type="text" placeholder="Custom question:"/>
						<button>Add Question</button>
					</div>
					<div id="cDono">
						<p>Settings</p>
						<input type="text" placeholder="Donation account:"/>
					</div>
					<button onClick={this.back}>Logout</button>
				</div>
				<div id="user">
					<div id="uChat">
						chat
					</div>
					<div id="uQuestion">
						  <div class="qcont">
						    <h1 class="logo">PoliSpace</h1>

						    <div class="">
						      <h2 class="creatorName">Bernie Sanders</h2>
						    </div>

						    <div class="questionBox">
						      <p>Creators quetions can be 220 characters long and will go here, for example: Do you think that it is time that the top tenth of the one percent pay their fare share?</p>
						    </div>

						    <div class="buttons">
						      <button type="button" class="btn btn-outline-secondary btns yay">YAY</button>
						      <button type="button" class="btn btn-outline-secondary btns nay">Nay</button>
						    </div>

					        <div>
						      <input type="text" class="form-control message" placeholder="Send a message:"/>
						      <div>
						        <button class="btn btn-outline-secondary sendBtn">Send</button>
						      </div>
						    </div>

						  </div>
					</div>
					<div >
						<div id="uDono"></div>
						<h2>Donations</h2>
				        <div>
					      <input type="text" class="form-control message" placeholder="Send a donation:"/>
					      <div>
					        <button class="btn btn-outline-secondary sendBtn">Send</button>
					      </div>
					    </div>
					</div>
					<div id="uGame">
						<p>A game will go here where users can win prizes.</p>
						<button onClick={this.back}>Logout</button>
					</div>
				</div>

				  <div id="signin">
				    <h1 class="logo">PoliSpace</h1>
				    <div class="input-group mb-3">
				      <input type="text" class="info user" aria-label="Text input with checkbox" placeholder="Username"/>
				    </div>

				    <div class="input-group mb-3">
				      <input type="text" class="info pass" aria-label="Text input with checkbox" placeholder="Password"/>
				    </div>
				    <div class="buttons">
				      <button type="button" onClick={this.showUser} class="btn btn-outline-secondary btns">User Login</button>
				    </div>

				    <div class="buttons">
				      <button type="button" onClick={this.showCreator} class="btn btn-outline-secondary btns">Creator Login</button>
				    </div>

				    <div class="buttons">
				        <button type="button" id="myBtn" onClick={this.signup} class="btn btn-outline-secondary btns">Sign Up</button>
				    </div>

					<div id="myModal" class="modal">
					  <div class="modal-content">
					    <span onClick={this.closeSignup} class="close">&times;</span>
									    
						<h1 class="logo">PoliSpace</h1>
						<h2>Sign Up</h2>
						<div class="input-group mb-3">
						<input id="email" type="text" class="info user" aria-label="Text input with checkbox" placeholder="Email"/>
						</div>

						<div class="input-group mb-3">
						<input id="username" type="text" class="info user" aria-label="Text input with checkbox" placeholder="Username"/>
						</div>

						<div class="input-group mb-3">
						<input id="password" type="text" class="info pass" aria-label="Text input with checkbox" placeholder="Password"/>
						</div>

						<div class="buttons">
						<button type="button" class="btn btn-outline-secondary btns">Sign Up</button>
						</div>
					  </div>
					</div>
				  </div>
			</div>
		);
	}
}

ReactDOM.render(
  <Document />,
  document.getElementById('root')
);