
//STEP 1
import React, { Component } from 'react';
import '../App.css';

//STEP 3
import { addReminder, deleteReminder, clearReminders } from '../actions';
import { connect } from 'react-redux';

//STEP 9
import moment from 'moment';

//STEP 1
class App extends Component {

	//STEP 2
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		text: '',
	// 		dueDate: ''
	// 	}

	// 	//this.handleTextChange = this.handleTextChange.bind(this);
	// 	//this.handleDateChange = this.handleDateChange.bind(this);
	// 	//this.addReminder = this.addReminder.bind(this);
	// 	//this.clearReminders = this.clearReminders.bind(this);
	// }


	//STEP 2
	 addReminder = () => {

		//STEP 8
		 console.log('this.state.dueDate', this.state.dueDate);
		 this.props.addReminder(this.state.text, this.state.dueDate);

		//STEP 3 
		//console.log('this', this);
		//this.props.addReminder(this.state.text);

		//STEP 2
		//console.log('this state', this.state);



	//STEP 11 Clear input

	 	//const { text, dueDate } = this.state;
		//this.props.addReminder(text, dueDate);
	 	// this.setState(() => {
		// 	return {
	 	// 		text: '',
	 	// 		dueDate: ''
	 	// 	};
	 	// });

	//  handleTextChange = (evt) => {
	// 	 let text = evt.target.value;
		 
	//  	 this.setState(() => {
	//  		return {
	//  	 		text
	//  	 	}
	//  	 });
	//  }

	//  handleDateChange = (evt) => {
	//  	let dueDate = evt.target.value;
	//  	this.setState(() => {
	//  		return {
	//  			dueDate
	//  		}
	//  	});
	//  }

	
	 }


      //STEP 6
	  deleteReminder(id) {
		  console.log('deleting app', id)
		  console.log('this.props', this.props)
	 	this.props.deleteReminder(id);
	 }

	 //STEP 11
	 clearReminders = () => {
	 	this.props.clearReminders();
	 }

	
     //STEP 9
	 getFromNowDate(dueDate) {
	 	return moment(new Date(dueDate)).fromNow();
	 }

	 //STEP 5
	 renderReminders() {

		 //STEP 5
		 const { reminders } = this.props;
		 //console.log('Reminders, reminders')
		 
		//STEP 5
	 	return (
	 		<ul className="list-group col-sm-4">
	 			{
	 				reminders.map((reminder) => {
						return (

							<li key={reminder.id} className="list-group-item">
							  <div className="list-item">
							     <div>{reminder.text}</div>
								 <div><em>{this.getFromNowDate(reminder.dueDate)}</em></div>
							  </div>
							  <div onClick={() => this.deleteReminder(reminder.id)} className="list-item delete-button">
	 								&#x2715;
	 							</div>
							</li>
						

	 					)
	 				})
				}
	 		</ul>
	 	);
	 }

    //STEP 1
 	render() {

		 //STEP 4
		 //console.log('this.props', this.props);

    	return (
      		<div className="App">
				<div className="title">
					Reminder App
				</div>
				<div className="form-inline reminder-form">
					<div className="form-group">
						<input
							className="form-control"
							placeholder="I have to..."
							value={this.props.text}
							//onChange={this.handleTextChange}

							//STEP 2
							onChange={event => this.setState({text: event.target.value})}
						/>
						 <input
							className="form-control"
							type="datetime-local"
							value={this.props.dueDate}
							//onChange={this.handleDateChange}

							//STEP 8
							onChange={event => this.setState({dueDate: event.target.value})}
						/> 

						<button
							type="button"
							className="btn btn-success"
							onClick={this.addReminder}
						>Add Reminder</button>
					</div>
				</div>

				{/*STEP 5*/}
				{this.renderReminders()}

				{/*STEP 11*/}
				<button
					type="button"
					className="btn btn-danger"
					onClick={this.clearReminders}
				>Clear Reminders</button> 
			</div>
    	);
  	}
}

//STEP 4
 function mapStateToProps(state) {

	//STEP 4
	 //console.log('State', state);
 	return {
 		reminders: state
 	}
 }


//STEP 11
export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);

//STEP 6
//export default connect(mapStateToProps, {addReminder, deleteReminder} ) (App);

//STEP 4
//export default connect(mapStateToProps, {addReminder} ) (App);

//STEP 3
//export default connect(null, {addReminder} ) (App);

//STEP 1 and 2
//export default App;