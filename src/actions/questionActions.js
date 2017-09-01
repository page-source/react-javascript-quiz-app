export function createQuestion(question){
	if(question===false)
		return {type:'CREATE_QUESTION' , question}
	else
		return {type:'CHANGE_QUESTION_STATE' , question}
}