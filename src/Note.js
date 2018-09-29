import React, { Component } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

class Note extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind( this );
        this.remove = this.remove.bind( this );
        this.save = this.save.bind( this );
        this.renderForm = this.renderForm.bind( this );
        this.renderDisplay = this.renderDisplay.bind( this );
    }
// sets the state of edit
    edit( ) {
        this.setState({
             editing: true
        })
    }
//sets the state of save
    save( ) {
        alert ( this._newText.value );
    }
//sets the state of remove
    remove( ) {
        alert( 'removing note' );
    }

// render the form that takes text input from users
    renderForm () {
             return (
                <div className="note"> 
                    <form>
                        <textarea ref = {input => this._newText = input } />
                        <button onClick = {this.save} id ="save" ><FaFileAlt/> </button>
                    </form>
                </div>
         )
    }

// displays the Note to the users
 renderDisplay( ) {
        return( 
               <div className = "note" >
                    <p> {this.props.children} </p>
                    <span>
                        <button onClick = {this.edit} id="edit"> < FaPencilAlt/></button>
                        <button onClick = {this.remove}id = "remove" > < FaTrashAlt/> </button> 
                    </span> 
               </div>                           
        )

}

//if the state of edit is true display the renderForm else display renderDisplay
    render(){
            return this.state.editing ? this.renderForm(): this.renderDisplay() }
               
}
export default Note;
