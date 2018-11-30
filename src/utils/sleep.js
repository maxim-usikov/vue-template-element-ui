// Example:
// async function demo() {
//  console.log('Taking a break...');
//  await sleep(2000);
//  console.log('Two seconds later');
// }
export default function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
