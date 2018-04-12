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


input = [20,23,15];
input2 = [3,10,20];
n = new Neuron(input2);

console.log(n.feedForward(input2));