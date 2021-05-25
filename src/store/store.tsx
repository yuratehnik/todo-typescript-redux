import React from "react";
import {createStore} from "redux";
import {ITodoItem, IReduxAction} from "../types/types";
import {todoReducer} from "./reducers";
import {ADD_ITEM, REMOVE_ITEM, HANDLE_CHECKED} from "./actionTypes";

const initialState: Array<ITodoItem> = []


const todoStore = createStore(todoReducer, initialState)

export {todoStore}