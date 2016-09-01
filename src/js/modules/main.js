const initialState = {style: null};
//ACTION
const SET_STYLE_CHOICE = 'SET_STYLE_CHOICE';

//ACTION CREATOR
export function setStyleChoice (styleName) {
	return {
		type: SET_STYLE_CHOICE,
		style: styleName
	}
}

//REDUCER
export default function (state = initialState, action) {
	switch (action.type) {
		case SET_STYLE_CHOICE:
			return Object.assign({}, state, {
				style: action.style
			})
		default:
			return state; 
	}
}

