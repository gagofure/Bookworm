import React, { Component } from 'react';
import Note from './Note';
import { FaPlusCircle } from 'react-icons/fa';


class Board extends Component {
	constructor(props) {       // render note based on some state data
		super(props)
		this.state = {
			notes: [] // an arry that list numbers of note in our App
		}
		this.add = this.add.bind(this);
		this.eachNote = this.eachNote.bind(this);
		this.update = this.update.bind(this);
		this.remove = this.remove.bind(this);
		this.nextId = this.nextId.bind(this);
	}
		// Add new Note to the board 
		add(text){
			this.setState(prevState => ({
				notes: [
					...prevState.notes,
					{
						id: this.nextId(), 
						note: text
					}
				]
			}))
		}

		// generates id for a new note added or created
		nextId(){
			this.uniqueId || 0
			return this.uniqueId++ 
		}

	//  Update/edit the existing note || The state of the note is held in Board component.
	// Update fuction will help us send the newText from it's child, Note component.
	update(newText, i) {
		console.log('Updating item at index', i, newText);
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : { ...note, note: newText }
			) // reset note to what ever the previous state of notes.map is if the conditiion is met
		}))  //reset to the previous state of the note
	}

	//Remove note from the board
	remove(id){
		console.log('removing item at', id);
		this.setState(prevState =>({
			notes: prevState.notes.filter(note => note.id !== id)
		}))
	}




	//renders note based on our dynamic data
	//for each note in state display the note/notes
	eachNote(note, i) {
		return (
			<Note key={i}
				index={i}
				onChange={this.update}
				onRemove={this.remove}>
				{note.note}
			</Note>
		) // onChange get the newText from the note by calling the update Functon

	}

	//.maps maps all the note in state and call each note fuction for every instance of a note || this is the board component
	render() {
		return (
			<div className="board" >
				{this.state.notes.map(this.eachNote)}
				<button onClick= {this.add.bind (null, "New Note")} id="add">
					<FaPlusCircle></FaPlusCircle>
				</button> 					{/* add new note to the board*/}
			</div>
		)
	}
}

export default Board;