'use strict';

class BinaryTree {
	constructor() {
		 this.root = null;
	}

	insert(data) {

		if (this.root == null){
			this.root = new Node();
			this.root.data = data;
		} else {
			var current = this.root;

			while (true){
				var newNode = new Node();
				newNode.data = data;
				var parent = current;

				if (data < current.data){
					current = current.left;

					if (current == null){
						parent.left = newNode;
						return;
					}
				} else {
					current = current.right;

					if (current == null){
						parent.right = newNode;
						return;
					}
				}
			}
		}

	}

	contains(data) {
		var current = this.root;
		while (current.data != data){
			if (data < current.data){
				current = current.left;
			}
			else {
				current = current.right;
			}
			if (current == null){
				return false;
			}
		}
		return true;
	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
