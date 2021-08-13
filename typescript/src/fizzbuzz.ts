import "regenerator-runtime/runtime";

export function initializeFizzBuzz(
  list: HTMLOListElement,
  button: HTMLButtonElement
): void {
  console.debug("initializeFizzBuzz", list, button);
	// let tmp = fizzbuzz()
	let tmp:FizzBuzz = new FB()
	button.onclick = function(){  //on"C"lickと記述して一時間溶かした。
		let li: HTMLLIElement = document.createElement("li")
		// li.textContent = tmp.next().value
		li.textContent = tmp.next()
		list.appendChild(li)
	}
}

interface FizzBuzz {
	next(): string;
}

class FB {
	private n: number; //numberをintと記述して20分溶かした。
	constructor(){
		this.n=1
	}
	next(){
		let tmp:string
		if (this.n%3===0 && this.n%5===0){
			tmp = "FizzBuzz"
		} else if (this.n%3===0) {
			tmp = "Fizz"
		} else if (this.n%5===0) {
			tmp =  "Buzz"
		} else {
			tmp = this.n.toString()
		}
		this.n++
		return tmp
	}
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
