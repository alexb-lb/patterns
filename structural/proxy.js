/**
 * Proxy pattern
 * object based
 *
 * Provide a surrogate or placeholder for another object to control access to it.
 *
 * In object-oriented programming, objects do the work they advertise through
 * their interface (properties and methods).
 * Clients of these objects expect this work to be done quickly and efficiently.
 * However, there are situations where an object is severely constrained and
 * cannot live up to its responsibility. Typically this occurs when there is
 * a dependency on a remote resource (resulting in network latency) or when
 * an object takes a long time to load.
 */
// Target
function networkFetch(url) {
  return `${url} - Response from network`;
}

// Proxy
// ES6 Proxy API = new Proxy(target, handler);
const cache = [];
const proxiedNetworkFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const urlParam = args[0];
    if (cache.includes(urlParam)) {
      return `${urlParam} - Response from cache`;
    } else {
      cache.push(urlParam);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

// usage
console.log(proxiedNetworkFetch('dogPic.jpg')); // 'dogPic.jpg - Response from network'
console.log(proxiedNetworkFetch('dogPic.jpg')); // 'dogPic.jpg - Response from cache'
