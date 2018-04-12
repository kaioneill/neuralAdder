

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
		this.inputs = [];
		this.answer = num;
		for (let i in word) {
			this.inputs.push(i);
		}
	}


}



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






let numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let trainers = [];

for (let i in numWords) {
	trainers.push(new Trainer(wordToNums(numWords[i])));
}


let n = new Neuron([1,1,1,1,1], 3);


for (let i in trainers) {
	n.train(trainers[i].inputs, trainers[i].answer);
	console.log(n.feedForward(i.inputs));
}






