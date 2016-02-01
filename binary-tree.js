'use strict';

class BinaryTree {
	constructor() {
		 this.root = null;
	}

	insert(data) {

		if (this.root === null){
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
		var parent = this.root;
		var current = this.root;
		var toLeft = true;

		while(current.data != data){
			parent = current;

			if (data < current.data){
				toLeft = true;
				current = current.left;
			} else {
				toLeft = false;
				current = current.right;
			}

			if (current == null){
				return;
			}
		}

		if (current.right == null && current.left == null ){
			if (current.data == this.root.data){
				this.root = null;
			} else if (toLeft == true) {
				parent.left = null;
			}
			else {
				parent.right = null;
			}
		} else if (current.right == null){
			if (current.data == this.root.data){
				this.root = current.left;
			} else if (toLeft == true){
				parent.left = current.left;
			} else {
				parent.right = current.left;
			}

		} else if (current.left == null){
			if (current.data == this.root.data){
				this.root = current.right;
			} else if (toLeft == true){
				parent.left = current.right;
			} else {
				parent.right = current.right;
			}
		} else {
			var successor = new Node();
			var l = current.left;
			var r = current.right;
			successor = getSuccessor(current);
			if (current == this.root){
				this.root = successor;
			} else if (toLeft == true){
				successor.left = parent.left.left;
				parent.left = successor;

			} else {
                successor.left = parent.right.left;
				parent.right = successor;

			}
		}

		function getSuccessor(nodeForDel){
			var successorParent = nodeForDel;
			var successor = nodeForDel;
			var current = nodeForDel.right;
			while (current != null){
				successorParent = successor;
				successor = current;
				current = current.left;
			}
			if (successor != nodeForDel.right){
				successorParent.left = successor.right;
				successor.right = nodeForDel.right;
			}
			return successor;
		}

	}

	size() {
		var count = 0;
		function mySize(localRoot1){
			if (localRoot1 != null){
				count++;
				mySize(localRoot1.left);
				mySize(localRoot1.right);
			}
			return count;
		};
		var localRoot = this.root;
		if (localRoot == null){
			k = 0;
			return k;
		} else{
			var k = mySize(localRoot);
			return k;
		}

	}


	isEmpty() {
		if (this.root == null){
			return true;
		} else {
			return false;
		}

	}


}
