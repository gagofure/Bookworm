import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {
	constructor(props) {       // render note based on some state data
		super(props)
		this.state = {
			notes: [		// an arry that list numbers of note in our App
				{
					id: 0,
					note: "Call Lisa"
				},
				{
					id: 1,
					note: "Email Jon"
				},
				{
					id: 2,
					note: "Buy some Kitkat"
				}
			]
		}
		this.eachNote = this.eachNote.bind(this);
		this.update = this.update.bind(this);
	}

	// The state of the note is held in Board component.
	// Update fuction will help us send the newText from it's child, Note component.
	update(newText, i) {
		console.log('Updating item at index', i, newText);
		this.setState(preState => ({
			notes: preState.notes.map(
				note => (note.id !== i) ? note : { ...note, note: newText }
			) // reset note to what ever the previous state of notes.map is if the conditiion is met
		}))  //reset to the previous state of the note

	}


	//render note based on our dynamic data
	//for each note in state display the note/notes
	eachNote(note, i) {
		return (
			<Note key={i}
				index={i}
				onChange={this.update}>
				{note.note}
			</Note>
		)// onChange get the newText from the note by calling the update Functon 

	}

	//.maps maps all the note in state and call each note fuction for every instance of a note 
	render() {
		return (
			<div className="board" >
				{this.state.notes.map(this.eachNote)}
			</div>
		)
	}
}

export default Board;