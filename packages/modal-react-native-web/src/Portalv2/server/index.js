import ReactDOMServer from 'react-dom/server';

import { flushUniversalPortals } from '../client';

export function getUniversalPortals() {
  const portals = flushUniversalPortals();

  if (!portals.length) {
    return [];
  }

  return portals.map((children) => ReactDOMServer.renderToString(children));
}
