

// turn spelling of number into alphabet values, pad with 0
function wordToNums(s) {
	let nums = [];
	let i = 0;
	for (i in s) {
		nums.push(s.charCodeAt(i) - 96);
	}

	for (; i < 4; i++) {
		nums.push(0);
	}
	// console.log(nums);
	return nums;
}


class Trainer {
	constructor(word, num) {
		this.inputs = word;
		this.answer = num;
	}


}



class Neuron {


	constructor(n, learnRate) {
		this.weights = [];
		this.learnRate = learnRate

		for (let i = 0; i < n; i++) {
			this.weights.push(Math.random());
		}
	}


	train(input, goal) {
		let guess = this.feedForward(input);
		let error = goal - guess;
		for (let i in this.weights) {
			this.weights[i] += this.learnRate * error * input[i];
		}
	}

	activation(n) {
		return this.sigmoid(n);
	}


	feedForward(input) {
		this.sum = 0;
		
		// normalize
		let ratio = 1 / Math.max.apply(Math, input);

		for (let i in input) {
			input[i] = input[i] * ratio;
		}

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






let numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let trainers = [];

for (let i in numWords) {
	// console.log(wordToNums(numWords[i]));
	trainers.push(new Trainer(wordToNums(numWords[i]), i));
}


let n = new Neuron(5, .4);


for (let i in trainers) {
	// console.log(trainers[i].inputs);
	// console.log(trainers[i].answer);
	n.train(trainers[i].inputs, trainers[i].answer);
	console.log(numWords[i]);
	console.log(n.feedForward(trainers[i].inputs));
}






