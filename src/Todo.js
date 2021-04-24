import {  List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import classes from './Todo.css';

function Todo(props) {
    return (
        <div className={classes.todo__list}>
        <List >
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
            </ListItem>
        </List>
        </div>

    )
}

export default Todo;