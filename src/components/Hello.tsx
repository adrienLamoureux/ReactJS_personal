import * as React from "react";
import { Button } from 'react-bootstrap';

// API
export const HelloAPI = {

}

// Input
export interface HelloProps { compiler: string; framework: string; }

// DOM
export const Hello = (props: HelloProps) => 
<div>
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
    <Button bsStyle="primary" onClick={(event: React.MouseEvent<Button, MouseEvent>) => {HelloEvent.onClick(event)}}>default</Button>
</div>;

// DOM events
const HelloEvent = {
    
    /**
     * OnClick
     * @param event 
     */
    onClick(event: React.MouseEvent<Button, MouseEvent>): void {
        log("onClick"); 
        log(event);
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