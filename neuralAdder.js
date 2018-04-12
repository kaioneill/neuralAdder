

// turn spelling of number into alphabet values, add number to end of array
function wordToNums(s) {
	let nums = [];
	for (let ch in s) {
		nums.push(s.charCodeAt(ch) - 96);
	}
	return nums;
}


class Trainer {
	constructor(word, num) {
		this.inputs = [];
		this.answer = num;
		for (let i in word) {
			this.inputs.push(i);
		}
	}


}

let numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let trainers = [];

for (let i in numWords) {
	trainers.push(new Trainer(wordToNums(numWords[i])));
}

console.log(trainers);







class Neuron {


	constructor(input, learnRate) {
		this.weights = [];
		this.learnRate = learnRate

		for (let i in input) {
			this.weights.push(Math.random());
		}
	}


	train(input, goal) {
		let guess = this.feedForward(input);
		let error = desired - guess;

		for (let i in this.weights) {
			weights[i] += this.learnRate * error * input[i];
		}
	}

	activation(n) {
		return this.sigmoid(n);
	}


	feedForward(input) {
		this.sum = 0;
		
		// normalize
		// let ratio = 1 / Math.max.apply(Math, input);

		// for (let i in input) {
		// 	input[i] = input[i] * ratio;
		// }

		for (let i in input) {
			this.sum += input[i] * this.weights[i];
		}
		return this.activation(this.sum);
	}


	sigmoid(t) {
    	//return 1/(1+Math.pow(Math.E, -t));
    	return t;
	}
}

