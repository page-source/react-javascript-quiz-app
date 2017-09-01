export default function addQuestionReducer(state = [], action){
	switch (action.type){
		case 'CREATE_QUESTION':
			return Object.assign({}, state, {questionAdded:true})
		case 'CHANGE_QUESTION_STATE':
			return Object.assign({}, state, {questionAdded:false})
		default:
				return state;
	}
}