import React, {useEffect, useState} from "react";
import {IReduxAction, ITodoItem} from "../../types/types";
import {
    Container,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    ListItemIcon
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { removeTodoAction, handleCheckedTodo} from "../../store/actionGenerators";
import {connect} from "react-redux";
import {todoStore} from "../../store/store"

interface TodoListProps {
    removeTodoAction: (id: number) => IReduxAction;
    handleCheckedTodo: (e: React.ChangeEvent<HTMLInputElement>, id: number) => IReduxAction;
}

const TodoList: React.FC<TodoListProps> = ({ removeTodoAction, handleCheckedTodo }) => {
    const [todoList, setTodoList] = useState<Array<ITodoItem>>([])

    useEffect(()=>{
        todoStore.subscribe(() => {
            console.log("update todo list")
            setTodoList(todoStore.getState());
        });
    },[])

    return(
        <Container>
            <List>
                {todoList.map((item: ITodoItem) => {
                    return (
                        <ListItem
                            key={item.id}
                            divider>
                            <ListItemIcon>
                                <Checkbox
                                    checked={item.isChecked}
                                    onChange={(e)=>handleCheckedTodo(e, item.id)}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                style={{ textDecoration : item.isChecked ? 'line-through' : 'none' }}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={()=>{removeTodoAction(item.id)}}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                }).reverse()}
            </List>
        </Container>
    )
}

const mapStateToProps = (state: ITodoItem[]) => ({
    state: state,
});

const mapDispatchToProps = {
    removeTodoAction,
    handleCheckedTodo
};

const ComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default ComponentContainer;