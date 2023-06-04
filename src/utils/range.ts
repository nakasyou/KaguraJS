/**
 * Returns n numbers from 0 to (n-1) in order.
 * @remarks
 * A generator that returns n numbers from 0 to (n-1) in order.
 * #### what does it exist for?
 * Because doing that would require writing long code.
 * Old: 
 * ```ts
 * for(let i = 0; i < 10; i++){
 *   console.log(`Count is ${i}.`)
 * }
 * ```
 * Using this:
 * ```ts
 * for(const i of range(10)){
 *   console.log(`Count is ${i}.`)
 * }
 * ```
 * @example
 * ```ts
 * for(const i of range(1000)){
 *   console.log(i)
 * }
 * ```
 * @param n - Number to stop before that number
 * @returns A sequential number generator
 */
export default function * (n: number): Generator<number, void, unknown> {
  for (let i = 0; i !== n; i++) {
    yield i
  }
}
