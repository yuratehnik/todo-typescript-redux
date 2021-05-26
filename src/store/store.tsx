import React from "react";
import {createStore} from "redux";
import {ITodoItem} from "../types/types";
import {reducers, typeOfReducers} from "./reducers";

const initialState: Array<ITodoItem> = []


const todoStore: typeOfReducers = createStore(reducers)

export {todoStore}