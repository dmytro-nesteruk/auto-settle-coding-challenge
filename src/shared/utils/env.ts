export const isBrowser = () => Boolean(globalThis.window);
export const isServer = () => !isBrowser();
