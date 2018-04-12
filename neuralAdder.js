let numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];



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
		for (i in word) {
			this.inputs.push(i);
		}
	}


}

let t = new Trainer();





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

