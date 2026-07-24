/**
 * Return a friendly greeting.
 *
 * @param {string} [name="World"] name to greet
 * @returns {string} greeting text
 */
export function greet(name = "World") {
  const normalizedName = String(name).trim();
  return `Hello, ${normalizedName || "World"}!`;
}
