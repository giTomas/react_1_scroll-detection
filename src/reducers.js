import actions from './actions';

const initialState = {
  scrollY: 0,
  scrollDown: false,
  scrollUp: false,
  scrollDirection: 'None',
}

function scrollStateReducer(state=initialState, action) {
  if (action.type === actions.UPDATE_SCROLL_STATUS) {
    return {
      ...state,
      scrollY: action.payload,
      scrollDown: state.scrollY < action.payload,
      scrollUp: state.scrollY > action.payload,
      scrollDirection: state.scrollY < action.payload ? 'Down' : 'Up',
    };
  }
  else {
    return state;
  }
}
//
// function scrollStateReducer(state=initialState, action) {
//     switch (action.type) {
//       case actions.UPDATE_SCROLL_STATUS:
//         return {
//           ...state,
//           scrollY: action.payload,
//           scrollDown: state.scrollY < action.payload,
//           scrollUp: state.scrollY > action.payload,
//           scrollDirection: state.scrollY < action.payload ? 'Down' : 'Up',
//         }
//       case actions.UPDATE_SCROLL_Y:
//         return {
//           ...state,
//           scrollY: action.payload,
//         };
//       case actions.UPDATE_SCROLL_DOWN:
//         return {
//           ...state,
//           scrollDown: action.payload,
//         };
//       case actions.UPDATE_SCROLL_UP:
//         return {
//           ...state,
//           scrollUp: action.payload,
//         };
//       case actions.UPDATE_SCROLL_DIRECTION:
//         return {
//           ...state,
//           scrollDirection: action.payload,
//         };
//       default:
//         return state;
//     }
// }

export default scrollStateReducer;
