import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
// import FuelSavingsForm from '../components/FuelSavingsForm';

export default HomePage = (props) => {
  return (
    <div>Hello</div>
  );
};

// HomePage.propTypes = {
//   // actions: PropTypes.object.isRequired,
//   // fuelSavings: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     // fuelSavings: state.fuelSavings
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     // actions: bindActionCreators(actions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HomePage);
