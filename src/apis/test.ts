export async function get(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
