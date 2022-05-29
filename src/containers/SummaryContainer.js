import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectTipAmount,
  selectSubtotal,
  selectTotal
} from '../store/items/selectors';

const mapStateToProps = (state) => {
  // Solution 1:
  //   const items = state.items;
  //   let subtotal = 0;

  //   for (const item of items) {
  //     subtotal += item.price * item.quantity;
  //   }
  //   const tipAmount = subtotal * (state.tipPercentage / 100);
  //   const total = subtotal + tipAmount;

  // Solution 2:
  //   const items = state.items;
  //   const subtotal = items.reduce((acc, item) => {
  //     return acc + item.price * item.quantity;
  //   }, 0);
  //   const tipAmount = subtotal * (state.tipPercentage / 100);
  //   const total = subtotal + tipAmount;

  // Solution 3:
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return { subtotal, tipAmount, total };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
