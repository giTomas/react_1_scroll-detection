import actions from './actions';

export function updateScrollStatus(scrollY) {
  return {
    type: actions.UPDATE_SCROLL_STATUS,
    payload: scrollY,
  }
}

export function updateScrollY(scrollY) {
  return {
    type: actions.UPDATE_SCROLL_Y,
    payload: scrollY,
  }
}

export function updateScrollDown(scrollDown) {
  return {
    type: actions.UPDATE_SCROLL_DOWN,
    payload: scrollDown,
  }
}

export function updateScrollUp(scrollUp) {
  return {
    type: actions.UPDATE_SCROLL_UP,
    payload: scrollUp,
  }
}

export function updateScrollDirection(scrollDirection) {
  return {
    type: actions.UPDATE_SCROLL_DIRECTION,
    payload: scrollDirection,
  }
}

const actionCreators = {
  updateScrollY,
  updateScrollUp,
  updateScrollDown,
  updateScrollDirection,
  updateScrollStatus,
}

export default actionCreators;
