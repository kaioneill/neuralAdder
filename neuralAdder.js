class neuron {


	constructor(ins) {
		this.ins = ins;
		this.weights = [];

		for (let i in this.ins) {
			this.weights.push(Math.random());
		}
	}

	activation() {
		this.ins;
		this.result = 0;

		for (let i = 0; i < this.ins.length; i++) {
			this.result += this.sigmoid(this.ins[i]) * this.weights[i];
		}

		return this.result;
	}


	sigmoid(t) {
    	return 1/(1+Math.pow(Math.E, -t));
	}
}



n = new neuron([1,2,3]);

console.log(n.activation());