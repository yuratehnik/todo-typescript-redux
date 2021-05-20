import React from "react";
import create from 'zustand'
import {ITodoItem, IUseTodoList} from "../types/types";

const useTodoList = create<IUseTodoList>((set) => ({
    todoList: [],
    addItem(text) {
        set((prev: IUseTodoList) => {
            const newItem: ITodoItem = {
                text,
                isChecked: false,
                id: new Date().getTime()
            }
            return {...prev, todoList: [...prev.todoList, newItem]}
        })
    },
    removeItem(id) {
        set((prev: IUseTodoList) => {
            let newArray = [...prev.todoList];
            const itemIndex = newArray.findIndex((item) => item.id === id)
            newArray.splice(itemIndex, 1);

            return {...prev, todoList: [...newArray]}
        })
    },
    handleChecked(e, id) {
        set((prev: IUseTodoList) => {
            const newCheckedStatus = e.target.checked;
            const newArray = prev.todoList.map((item: ITodoItem)=>{
                if(item.id === id) {
                    item.isChecked = newCheckedStatus;
                }
                return item;
            })

            return {...prev, todoList: [...newArray]}
        })
    }
}));

export {useTodoList};
