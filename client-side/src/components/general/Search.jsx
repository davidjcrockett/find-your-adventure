import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function SearchBar({validateQGame}) {
    return (
        <FloatingLabel
        controlId='floatingInput'
        label='Search for a game'
        className='mb-3'
        >
            <Form.Control
            type='text'
            placeholder='Search for a game'
            controlid='q_game'
            style={{width: '100%'}}
            onKeyPress={e => validateQGame(e)}
            />
        </FloatingLabel>
    )
}
 
export default SearchBar;