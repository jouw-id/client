
import * as jouwid from './index';

declare let globalThis: {
  jouwid: typeof jouwid;
};

globalThis.jouwid = jouwid;