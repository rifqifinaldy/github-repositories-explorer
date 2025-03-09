import "@testing-library/jest-dom";

if (typeof globalThis.structuredClone !== "function") {
  globalThis.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
