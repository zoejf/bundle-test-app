import React from 'react';
import {connect} from 'react-redux';
import {setStyleChoice} from './modules/main';
// TODO:
	// when style is not null show another component below it

const QuestionsForm = ({checkedStyle, chooseStyle}) => {
	const styles = ["Modern", "Contemporary", "Bohemian", "Classic"];
	const radioButtons = styles.map(style => {
		if (style === checkedStyle) {
			return (<div>
				<input type="radio" name="style" value={style} onClick={chooseStyle} checked={false}/> {style}
			</div>);
		}
		return (<div><input type="radio" name="style" value={style} onClick={chooseStyle}/> {style}</div>);

	})
	return (
		<div>
			<h1>What is your style?</h1>
			{radioButtons}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		checked: state.main.checkedStyle || null
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		chooseStyle(event) {
			dispatch(setStyleChoice(event.target.value))
		}
	}
}

const ConnectedQuestionsForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionsForm);

export default ConnectedQuestionsForm;