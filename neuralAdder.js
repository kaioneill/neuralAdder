

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
		this.learnRate = learnRate;
		this.connections = [];
		for (let i = 0; i < n; i++) {
			this.weights.push(Math.random());
		}
	}

	addConnection(c) {
		this.connections.push(c);
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
    	return 1/(1+Math.pow(Math.E, -t));
    	// return t;
	}
}


class Connection {
	constructor(from, to, w) {
		this.from = from;
		this.to = to;
		this.weight = w;
	}
}

class Layer {
	constructor() {
		this.neurons = [];
	}
	addNeuron(n) {
		this.neurons.push(n);
	}
}

class Network {
	constructor() {
		this.layers = [];
	}

	addLayer(n) {
		this.layers.push(n);
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
	// console.log(numWords[i]);
	// console.log(n.feedForward(trainers[i].inputs));
}

// console.log(n.feedForward(wordToNums('three')));




let layer1 = new Layer();
let layer2 = new Layer();
let layer3 = new Layer();

for (let i = 0; i < 5; i++) {
	layer1.addNeuron(new Neuron(1, .4));
}
for (let i = 0; i < 3; i++) {
	layer2.addNeuron(new Neuron(5, .4));
}

layer3.addNeuron(new Neuron(3, .4));


let network = new Network();

network.addLayer(layer1);
network.addLayer(layer2);
network.addLayer(layer3);



for (let d = 0; d < network.layers.length - 1; d++) {
	let layer = network.layers[d];
	for (let k in layer.neurons) {
		let tempN = layer.neurons[k];
		for (let j in network.layers[d+1].neurons) {
			tempN.addConnection(new Connection(tempN, network.layers[d+1].neurons[j], Math.random()));
		}
	}
}

let two = [20,23,15]

for (let n in layer1.neurons) {
	console.log(layer1.neurons[n].feedForward(two[n]));
}








