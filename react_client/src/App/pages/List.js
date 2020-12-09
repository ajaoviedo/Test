import React, { useState } from 'react';
import RenderOnce from "../components/RenderOnce"
import MainNavbar from "../components/Navbar"
import AuthRedirect from "../components/AuthRedirect"

const List = (props) => {
    const [list_s, list_setState] = useState([]);

    AuthRedirect();

    // Fill the list only one time (don't update whenever the state changes)
    RenderOnce(() => {
        console.log("Hello!");

        fetch("/api/v1/getList")
            .then(res => res.json())
            .then(list => list_setState(list));
    });

    return (
        <div>
            <MainNavbar activeKey="list"></MainNavbar>
            <h1>List of new items</h1>
            <div>
                { list_s.map((item) => {
                    return (
                        <div key={item}>{item}</div>
                    );
                })}
            </div>
        </div>
    );
};


export default List;
