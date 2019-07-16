/*
* Box.jsx
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will be used for creating input element based on user drag operation
* Template: JSX
* Prerequisites: React and babel

METHODS
--------
getInputElement(id, left, top, name)
*/

import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const style = {
  position: 'absolute',
  cursor: 'move',
}

const Box = ({ id, left, top, name, hideSourceOnDrag, children }) => {
  const [shouldCrash, setShouldCrash] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, name, type: 'box' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  /**
     * @method
     * @name - getInputElement
     * This method return the html element based on type passed
     * @param id
     * @param left
     * @param top
     * @param name
     * @returns none
  */
  const getInputElement = (id, left, top, name) => {
    try {
      switch (name) {
        case 'TextLabel':
          return <div id={id} ref={drag} style={{ ...style, left, top }}>
            {children}
          </div>
        case 'TextInput':
          return <TextField
            id={id}
            ref={drag}
            style={{ ...style, left, top }}
            label={name}
            defaultValue="foo"
            margin="normal"
          />
        case 'Button':
          return <Button
            id={id}
            ref={drag}
            variant="contained"
            color="primary"
            style={{ ...style, left, top }}
          >
            {name}
          </Button>
        case 'Checkbox':
          return <FormControlLabel
            control={<Checkbox value="checkedC" />}
            label={name}
            style={{ ...style, left, top }}
            ref={drag}
            id={id}
          />

        default:
          return <div id={id} ref={drag} style={{ ...style, left, top }}>
            {children}
          </div>
      }
    } catch (error) {
      setShouldCrash(() => {
        throw new Error('getInputElement');
      });
    }
  };

  return (
    getInputElement(id, left, top, name)
  )
}
export default Box
