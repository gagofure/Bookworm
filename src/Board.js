import React, { Component } from 'react';
import Note from './Note';

class Board extends Component{
	constructor(props){       // render note based on some state data
		super(props)
			this.state ={
				notes:[		// an arry that list numbers of note in our App
					{
						id: 33,
						note: "Call Lisa"
					},
					{
						id: 34,
						note: "Email Jon"
					}	
				]
			}
		this.eachNote = this.eachNote.bind(this); 	
	}

//render note based on our dynamic data
//for each note in state display the note/notes
	eachNote(note, i) {    
			return(
				<Note   key={i}
						index ={i}>
						{note.note}
				</Note>
			)		
		
	}

// maps all the note in state and call each note fuction for every instance of a note 
	render(){
		return(
			<div className= "board" >
				{this.state.notes.map(this.eachNote)}   
			</div>
		) 
	}
} 

export default Board;