class Neuron {


	constructor() {
		this.weights = [];

		for (let i in this.ins) {
			this.weights.push(Math.random());
		}
	}

	activation(n) {
		return this.sigmoid(n);
	}


	guess(ins) {
		this.sum = 0;
		for (let i = 0; i < ins.length; i++) {
			this.sum += ins[i] * this.weights[i];
		}
		return this.sum;
	}


	sigmoid(t) {
    	return 1/(1+Math.pow(Math.E, -t));
	}
}



n = new Neuron();
inputs = [3,2,0.5];

console.log(n.guess(inputs));