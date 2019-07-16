/*
* DraggableListItem.jsx
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used render Items which are Draggable
* Template: JSX
* Prerequisites: React and babel

METHODS
--------
None
*/

import React from 'react'
import { useDrag } from 'react-dnd'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const style = {
  border: '1px solid gray',
  backgroundColor: 'white',
  marginBottom: '0.8rem',
  marginRight: '0.1rem',
  marginLeft: '0.1rem',
  cursor: 'move'
}

const DraggableListItem = ({ name, children }) => {
  let min=1; 
  let max=100;  
  let randomNumber =Math.floor(Math.random() * (+max - +min)) + +min;
  const [{ isDragging }, drag] = useDrag({
    item: { id: name+randomNumber, left: 0, top: 0, name, type: 'box' },
    end: dropResult => {
      if (dropResult) {
        // Do animation after the drop
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      <ListItem >
        <ListItemIcon>
          {children}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </div>
  )
}

export default DraggableListItem
