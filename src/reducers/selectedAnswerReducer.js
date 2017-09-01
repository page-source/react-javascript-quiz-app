export default function selectedAnswerReducer(state = [], action){
	switch (action.type){
		case 'ANSWER_QUESTION':
			return Object.assign({}, state, {bgClass:action.answer})
		default:
				return state;
	}
}