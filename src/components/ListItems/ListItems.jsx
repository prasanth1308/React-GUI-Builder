import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import DragableListItem from './DragableListItem';

const MainListItems = (
  <div>
    <DragableListItem name="TextLabel"/>
    <DragableListItem name="TextInpt"/>
    <DragableListItem name="Button"/>
    <DragableListItem name="Checkbox"/>
  </div>
);

export default MainListItems;