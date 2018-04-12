class Neuron {


	constructor(n) {
		this.weights = [];

		for (let i = 0; i < n.length; i++) {
			this.weights.push(Math.random());
		}
	}

	activation(n) {
		return this.sigmoid(n);
	}


	feedForward(ins) {
		this.sum = 0;
		for (let i = 0; i < ins.length; i++) {
			this.sum += ins[i] * this.weights[i];
		}
		return this.activation(this.sum);
	}


	sigmoid(t) {
    	return 1/(1+Math.pow(Math.E, -t));
	}
}


inputs = [3,0,1];
n = new Neuron(inputs);

console.log(n.guess(inputs));