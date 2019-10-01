/**
 * Created by wangjian on 2019/10/1.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
        this._min = 0;
        this._max = 0;
        this._depth = [];
    }
    addList(list) {
        let node = new Node(list);
        if(this.root == null) {
            this.root = node;
            this._min = node.value;
            this._max = node.value;

        }
        else {
            this.addListAct(this.root,node);
        }
    }
    addListAct(root,node) {
        if(root) {
            if(node.value < root.value) {
                if(root.left === null) {
                    root.left = node;
                    if(node.value < this._min) {
                        this._min = node.value;
                    }
                }
                else {
                    this.addListAct(root.left,node);
                }
            }
            else {
                if(root.right === null) {
                    root.right = node;
                    if(node.value > this._max) {
                        this._max = node.value;
                    }
                }
                else {
                    this.addListAct(root.right,node);
                }
            }
        }
        // this._min = this.min();
        // this._max = this.max();
        this._depth = this.depth();
    }
    min() {
        if(this.root === null) {
            return 0;
        }
        else {
            return this.findMin(this.root);
        }
    }
    findMin(root) {
        if(root) {
            if(root.left === null) {
                return root;
            }
            else {
                return this.findMin(root.left);
            }
        }
    }
    max() {
        if(this.root === null) {
            return 0;
        }
        else {
            return this.findMax(this.root);
        }
    }
    findMax(root) {
        if(root) {
            if(root.right === null) {
                return root;
            }
            else {
                return this.findMax(root.right);
            }
        }
    }
    depth() {
        return this.depthAct(this.root);
    }
    depthAct(root) {
        if(root === null) {
           return [];
        }
        else {
            let left = [];
            let right = [];
            if(root.left === null && root.right === null) {
                return [root.value];
            }
            else {
                left = this.depthAct(root.left);
                right = this.depthAct(root.right);
            }
            return [...left,...right].map(item => {
                return root.value + '->' + item;
            });
        }
    }
    remove(value) {
        this.root = this.removeAct(this.root,value);
        if(this.root) {
            this._depth = this.depth();
            this._min = this.min().value;
            this._max = this.max().value;
        }
    }
    removeAct(root,value) {
        if(root === null) {
            return -1;
        }
        else {
            if(value > root.value) {
                root.right = this.removeAct(root.right,value);
                return root;
            }
            else if(value < root.value) {
                root.left = this.removeAct(root.left,value);
                return root;
            }
            else {
                if(root.left === null && root.right === null) {
                    root = null;
                    return root;
                }
                else if(root.left === null) {
                    root = root.right;
                    return root;
                }
                else if(root.right === null){
                    root = root.left;
                    return root;
                }
                else {
                    let aux = this.findMin(root.right);
                    root.value = aux.value;
                    root.right = this.removeAct(root.right,aux.value);
                    return root;
                }
            }
        }
    }
    inorderTr(cb) {
        if(this.root === null) {
            return '';
        }
        else {
            this.inorderTrAct(this.root,cb);
        }
    }
    inorderTrAct(root,cb) {
        if(root) {
            this.inorderTrAct(root.left,cb);
            cb(root.value);
            this.inorderTrAct(root.right,cb);
        }
    }
    /*preorderTr(cb) && postorderTr*/
}

//test
let arr = [11,7,15,9,12,18,3];
let tree = new Tree();
arr.forEach(item => {
    tree.addList(item);
});
// tree.remove(11);
// console.log(tree);
// tree.inorderTr(console.log);