// CJS = Common JS

// MJS = Module JS

const data = {
  name: "Hoang",
};

let a = 10;

export { data, a as AAA };

export const b = 20;

// export default data;

/**
 * Export default
 */

export const x = 10;

let y = 100;

// export default y;

export default function summmmm(a, b) {
  return a + b;
}
