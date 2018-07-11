import ReactDOM from 'react-dom';

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const isReact16 = ReactDOM.createPortal !== undefined;

export const createPortal = isReact16
  ? ReactDOM.createPortal
  : ReactDOM.unstable_renderSubtreeIntoContainer;
