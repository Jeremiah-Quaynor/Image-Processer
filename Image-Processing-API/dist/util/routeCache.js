"use strict";
// const NodeChache = require('node-cache');
// const cache = new NodeChache();
// module.exports =
//   (duration: number) =>
//   (
//     req: { method: string; originalUrl: string },
//     res: { originalSend: (arg0: any) => void; send: (body: {}) => void },
//     next: () => void
//   ) => {
//     // check if request is get, if not call next
//     if (req.method != 'GET') {
//       console.error('Cannot cache no-GET methods');
//       return next();
//     }
//     // check if the key exists in cache
//     const key = req.originalUrl;
//     const cachedResponse = cache.get(key);
//     // if it exists, send cached results
//     if (cachedResponse) {
//       console.log(`cache for ${key} hit`);
//     } else {
//       //if not replace send with method to set response to cache
//       console.log(`Cache miss for ${key}`);
//       res.originalSend = res.send;
//       res.send = (body: any) => {
//         res.originalSend(body);
//         cache.set(key, body, duration);
//       };
//       next();
//     }
//     console.log(key);
//   };
