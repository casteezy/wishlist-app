import React from 'react';
import {Icon} from 'react-fa';

function LinkBar(props) {
    return (
        <ul className="LinkBar list-inline">
            <li className="LinkBarItem"><a href="#">
                <Icon name="check-circle"/> Mark as Purchased</a></li>
            <li className="LinkBarItem"><a href="#">
                <Icon name="question-circle"/> Ask About This Item</a></li>
        </ul>
    );
}

export default LinkBar;