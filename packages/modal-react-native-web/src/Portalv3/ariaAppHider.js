import { canUseDOM } from './utils';

let globalElement = null;

export function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error(
      `modal-enhanced-react-native-web: No elements were found for selector ${selector}.`
    );
  }
}

export function setElement(element) {
  let useElement = element;
  if (typeof useElement === 'string' && canUseDOM) {
    const el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = 'length' in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

export function validateElement(appElement) {
  if (!appElement && !globalElement) {
    return false;
  }

  return true;
}

export function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute('aria-hidden', 'true');
  }
}

export function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute('aria-hidden');
  }
}

export function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

export function resetForTesting() {
  globalElement = null;
}
