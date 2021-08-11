import "regenerator-runtime/runtime";

export function initializeFizzBuzz(
  list: HTMLOListElement,
  button: HTMLButtonElement
): void {
  console.debug("initializeFizzBuzz", list, button);
	let tmp = fizzbuzz()
	button.onclick = function(){console.log(tmp.next())}
	//on"C"lickと記述して一時間溶かした。
}

function* fizzbuzz(): IterableIterator<string>{
	let n=1;
	while(true) {
		if (n%3===0 && n%5===0){
			yield "FizzBuzz"
		} else if (n%3===0) {
			yield "Fizz"
		} else if (n%5===0) {
			yield "Buzz"
		} else {
			yield n.toString()
		}
		n++
	}
}
