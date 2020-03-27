
//STEP 2
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

//STEP 10
import { bake_cookie, read_cookie } from 'sfcookies';

//STEP 2
const reminder = (action) => {

	//STEP 8
	let { text, dueDate } = action;

	//const { text, dueDate } = action.payload;
	return {

		//STEP 2
		//text: action.text,

		id: Math.random(),

		//STEP 8
		text,
		dueDate
		
	}
}

//STEP 2
const reminders = (state = [], action) => {
	
	//STEP 2
	let reminders = null;

	//STEP 10
	state = read_cookie('reminders');

	//STEP 2
	switch(action.type) {
		
		//STEP 2
		case ADD_REMINDER:
			reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);

			//STEP 10
			bake_cookie('reminders', reminders);

			return reminders;
		 
		//Step 7
		 case DELETE_REMINDER:
			 reminders = state.filter((reminder) => reminder.id !== action.id);
			 
			 //STEP 10
		     bake_cookie('reminders', reminders);
		 	return reminders;

         //STEP 11
		 case CLEAR_REMINDERS:
		 	reminders = [];
		 	bake_cookie('reminders', reminders);
		 	return reminders;

		default:
			return state;
	}
}

export default reminders;
