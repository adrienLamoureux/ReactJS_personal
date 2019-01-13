import * as React from "react";

export const Topic = ({ match } : {match: any}) => <h3>Requested Param: {match.params.id}</h3>;