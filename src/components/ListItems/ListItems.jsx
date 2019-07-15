import React from 'react';
import TextLabelIcon from '@material-ui/icons/Label';
import TextInputIcon from '@material-ui/icons/Input';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DragableListItem from './DragableListItem';

const MainListItems = (
  <div>
    <DragableListItem name="TextLabel">
      <TextLabelIcon />
    </DragableListItem>
    <DragableListItem name="TextInput"> 
      <TextInputIcon />
    </DragableListItem>
    <DragableListItem name="Button"> 
      <DashboardIcon />
    </DragableListItem>
    <DragableListItem name="Checkbox"> 
      <CheckBoxIcon />
    </DragableListItem>
  </div>
);

export default MainListItems;