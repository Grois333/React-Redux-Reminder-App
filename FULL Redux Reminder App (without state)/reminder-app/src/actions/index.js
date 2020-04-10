//STEP 2
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

//STEP 2
export const addReminder = (text, dueDate) => {
	const action = {

		type: ADD_REMINDER,

		//STEP 8
		text,
		dueDate

		//STEP 2
		//text


		// payload: {
		// 	text,
		// 	dueDate
		// }
	};
	console.log("action in addReminder", action);
	return action;
}

//STEP 6
export const deleteReminder = (id) => {
	const action = {

		type: DELETE_REMINDER,
		id
	};
	console.log("deleting in actions", action);
	return action;
}

//STEP 11
 export const clearReminders = () => {
 	const action = {
		 
 		type: CLEAR_REMINDERS
 	};
 	return action;
 }
