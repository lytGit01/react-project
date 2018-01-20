import React, { Component } from 'react'
import { BrowserRouter, Link, Route, NavLink, Redirect, Switch } from 'react-router-dom'

export default function RouteWithSubRoute (item) {
    return (<Route path={item.path} render={(props) => {
        return (<item.component children={item.children} {...props}></item.component>)
    }}></Route>)
}