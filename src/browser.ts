
import * as jouwid from './jouwid';

declare let globalThis: {
  jouwid: typeof jouwid;
};

globalThis.jouwid = jouwid;