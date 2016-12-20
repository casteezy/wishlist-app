import {PropTypes} from 'react';
import { connect } from 'react-redux';
import { markPurchased } from '../actions';
import LinkBar from './LinkBar';

const mapStateToProps = (state, ownProps) => {
    return {
        // TODO
        purchased: ownProps.purchased
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickMarkPurchased: () => {
            console.log('onClickMarkPurchased', ownProps);
            dispatch(markPurchased(ownProps.itemId));
        },
        onClickAskAbout: () => {
            // TODO
        },
    };
};


const LinkBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkBar);


LinkBarContainer.propTypes = {
    itemId: PropTypes.number.isRequired,
    purchased: PropTypes.bool,
};

export default LinkBarContainer;