import React, {PropTypes} from 'react';
import {Icon} from 'react-fa';

function LinkBar({purchased = false, onClickMarkPurchased, onClickAskAbout}) {
    return (
        <ul className="LinkBar list-inline">
            {!purchased && <li className="LinkBarItem">
                <a href="" onClick={e => {
                    e.preventDefault();
                    onClickMarkPurchased();
                }}>
                    <Icon name="check-circle"/> Mark as Purchased
                </a>
            </li>}
            <li className="LinkBarItem">
                <a href="">
                    <Icon name="question-circle"/> Ask About This Item
                </a>
            </li>
        </ul>
    );
}

LinkBar.propTypes = {
    purchased: PropTypes.bool,
    onClickMarkPurchased: PropTypes.func.isRequired,
    onClickAskAbout: PropTypes.func,
};

export default LinkBar;