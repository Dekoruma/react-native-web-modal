import ReactDOM from 'react-dom';

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const portals = [];

export const removeUniversalPortals = () => {
  if (canUseDOM) {
    document.querySelectorAll('#modal-portal').forEach((node) => {
      node.remove();
    });
  }
};

export const createUniversalPortal = (children) => {
  if (!canUseDOM) {
    portals.push(children);
    return null;
  }

  const el = document.createElement('div');
  el.id = 'modal-portal';

  document.body.appendChild(el);

  return ReactDOM.createPortal(children, el);
};

export const flushUniversalPortals = () => {
  const copy = portals.slice();
  portals.length = 0;
  return copy;
};
