import * as React from "react";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { render } from "react-dom";

// API
export const HomeAPI = {

}

// Input
export interface HomeProps { compiler: string; framework: string; }

// DOM
export const Home = (props: HomeProps) =>
<div>
    <h1>Home from {props.compiler} and {props.framework}!</h1>
    <Button bsStyle="primary" onClick={(event: React.MouseEvent<Button, MouseEvent>) => {<Redirect to='/topics' />}}>default</Button>
</div>;

// DOM events
const HomeEvent = {
    
    /**
     * OnClick
     * @param event 
     */
    onClick(event: React.MouseEvent<Button, MouseEvent>): any {
        log("onClick"); 
        log(event);
        return <Redirect to='/topics' />;
    }
}

// Internal functions

/**
 * Console.log; Testing purpose
 * @param x 
 */
function log(x: any) {
    console.log(x);
}