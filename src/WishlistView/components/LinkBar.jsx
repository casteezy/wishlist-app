import React, {PropTypes} from 'react';
import {Icon} from 'react-fa';

const LinkBar = ({purchased, handleMarkPurchased, handleAskAbout}) => (
    <ul className="LinkBar list-inline">
        {!purchased && <li className="LinkBar--Item">
            <a href="#" onClick={e => {
                e.preventDefault();
                handleMarkPurchased();
            }}>
                <Icon name="check-circle"/> Mark as Purchased
            </a>
        </li>}
        <li className="LinkBar--Item">
            <a href="#">
                <Icon name="question-circle"/> Ask About This Item
            </a>
        </li>
    </ul>
);

LinkBar.propTypes = {
    purchased: PropTypes.bool,
    handleMarkPurchased: PropTypes.func.isRequired,
    handleAskAbout: PropTypes.func,
};

LinkBar.defaultProps = {
    purchased: false,
    handleMarkPurchased: () => {},
    handleAskAbout: () => {},
};

export default LinkBar;