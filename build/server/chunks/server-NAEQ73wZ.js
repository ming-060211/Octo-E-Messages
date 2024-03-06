import { r as redirect$1 } from './index-RcZWwKaW.js';

const cookieName = "flash";
const flashCookieOptions = {
  path: "/",
  maxAge: 120,
  httpOnly: false,
  sameSite: "strict"
};
function loadFlash(cb) {
  return async (event) => {
    const flash = _loadFlash(event).flash;
    const loadFunction = await cb(event);
    return { flash, ...loadFunction };
  };
}
function _loadFlash(event) {
  const dataString = event.cookies.get(cookieName);
  if (!dataString) {
    return { [cookieName]: void 0 };
  }
  let data = void 0;
  if (dataString) {
    const setFetchDest = event.request.headers.get("sec-fetch-dest");
    const accept = event.request.headers.get("accept");
    if (event.isDataRequest || setFetchDest == "empty" || accept == "*/*" || accept?.includes("application/json"))
      ;
    else {
      event.cookies.delete(cookieName, { path: flashCookieOptions.path });
    }
    try {
      data = JSON.parse(dataString);
    } catch (e) {
    }
  }
  return {
    [cookieName]: data
  };
}
function redirect(status, location, message, event) {
  switch (arguments.length) {
    case 2:
      if (typeof status === "number") {
        return realRedirect(status, `${location}`);
      } else {
        const message2 = status;
        const event2 = location;
        const redirectUrl = new URL(event2.url);
        for (const [key] of redirectUrl.searchParams) {
          if (key.startsWith("/")) {
            redirectUrl.searchParams.delete(key);
          }
          break;
        }
        return realRedirect(303, redirectUrl, message2, event2);
      }
    case 3:
      return realRedirect(303, status, location, message);
    case 4:
      return realRedirect(status, location, message, event);
    default:
      throw new Error("Invalid redirect arguments");
  }
}
function realRedirect(status, location, message, event) {
  if (!message)
    return redirect$1(status, location.toString());
  if (!event)
    throw new Error("RequestEvent is required for redirecting with flash message");
  const cookies = "cookies" in event ? event.cookies : event;
  cookies.set(cookieName, JSON.stringify(message), {
    ...flashCookieOptions,
    path: flashCookieOptions.path
  });
  return redirect$1(status, location.toString());
}
function setFlash(message, event) {
  const cookies = "cookies" in event ? event.cookies : event;
  cookies.set(cookieName, JSON.stringify(message), {
    ...flashCookieOptions,
    path: flashCookieOptions.path
  });
}

export { loadFlash as l, redirect as r, setFlash as s };
//# sourceMappingURL=server-NAEQ73wZ.js.map
