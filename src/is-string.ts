export default (x: unknown): boolean => Object.prototype.toString.call(x) === "[object String]";
