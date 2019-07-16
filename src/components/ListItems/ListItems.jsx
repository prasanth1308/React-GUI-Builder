/*
* ListItems.jsx
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used render List of Items Draggable on side bar of dashboard
* Template: JSX
* Prerequisites: React and babel

METHODS
--------
None
*/

import React from 'react';
import TextLabelIcon from '@material-ui/icons/Label';
import TextInputIcon from '@material-ui/icons/Input';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DraggableListItem from './DraggableListItem';

const ListItems = (
  <div>
    <DraggableListItem name="TextLabel">
      <TextLabelIcon />
    </DraggableListItem>
    <DraggableListItem name="TextInput"> 
      <TextInputIcon />
    </DraggableListItem>
    <DraggableListItem name="Button"> 
      <DashboardIcon />
    </DraggableListItem>
    <DraggableListItem name="Checkbox"> 
      <CheckBoxIcon />
    </DraggableListItem>
  </div>
);

export default ListItems;