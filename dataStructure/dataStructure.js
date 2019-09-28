/**
 * Created by wangjian on 2019/9/28.
 */
class Graph {
    constructor() {
        this.vertices = [];
        this.neighborList = {};
    }
    addVertex(v) {
        this.vertices.push(v);
        this.neighborList[v] = [];
    }
    addEdge(v,w) {
        // this.neighborList[v].push(w);
        // this.neighborList[w].push(v);
        for(let i = 0;i < w.length;i++) {
            this.neighborList[v][i] = w[i];
        }
        w.forEach(item => {
            this.neighborList[item].push(v);
        })
    }
    initColor() {
        let color = {};
        for(let i = 0;i < this.vertices.length;i++) {
            color[this.vertices[i]] = 'white';
        }
        return color;
    }
    bfs(start,callback) {
        let color = this.initColor();
        let queue = [];
        queue.push(start);
        while(queue.length) {
            let v = queue.shift();
            let neighbors = this.neighborList[v];
            color[v] = 'grey';
            for(let i = 0;i < neighbors.length;i++) {
                if(color[neighbors[i]] === 'white') {
                    queue.push(neighbors[i]);
                    color[neighbors[i]] = 'grey';
                }
            }
            color[v] = 'black';
            if(callback) {
                callback(v);
            }
        }
    }
    BFS(start,callback) {
        let color = this.initColor();
        let dep = {};
        let pre = {};
        for(let i = 0;i < this.vertices.length;i++) {
            dep[this.vertices[i]] = 0;
            pre[this.vertices[i]] = null;
        }
        let queue = [];
        queue.push(start);
        while(queue.length) {
            let v = queue.shift();
            color[v] = 'grey';
            let neighbors = this.neighborList[v];
            for(let j = 0;j < neighbors.length;j++) {
                if(color[neighbors[j]] === 'white') {
                    queue.push(neighbors[j]);
                    color[neighbors[j]] = 'grey';
                    dep[neighbors[j]] = dep[v] + 1;
                    pre[neighbors[j]] = v;
                }
            }
            color[v] = 'black';
            if(callback) {
                callback(v);
            }
        }
        if(callback) {
            callback(dep);
            callback(pre);
        }
    }

    dfs(callback) {
        let color = this.initColor();
        for(let i = 0;i < this.vertices.length;i++) {
            if(color[this.vertices[i]] === 'white') {
                color[this.vertices[i]] = 'grey';
                this.dfsAct(color,this.vertices[i],callback);
            }
        }
    }
    dfsAct(color,vertex,callback) {
        callback(vertex);
        let neighbors = this.neighborList[vertex];
        for(let j = 0;j < neighbors.length;j++) {
            if(color[neighbors[j]] === 'white') {
                color[neighbors[j]] = 'grey';
                this.dfsAct(color, neighbors[j], callback);
            }
        }
        color[vertex] = 'black';
    }
    DFS() {

    }
    toString() {
        let result = '';
        for(let i = 0;i < this.vertices.length;i++) {
            result += this.vertices[i] +'->';
            let neighbors = this.neighborList[this.vertices[i]];
            for(let j = 0;j < neighbors.length;j++) {
                result += neighbors[j];
            }
            result += '\n';
        }
        return result;
    }
}
let graph = new Graph();
let vertices = ['a','b','c','d','e','f','g','h','i'];
vertices.forEach(item => {
   graph.addVertex(item);
});
// graph.addEdge('a','b');
// graph.addEdge('a','c');
// graph.addEdge('a','d');
graph.addEdge('a',['b','c','d']);
graph.addEdge('b',['e','f']);
graph.addEdge('c',['g','d']);
graph.addEdge('d',['g','h']);
graph.addEdge('e',['i']);
// graph.addEdge('b','e');
// graph.addEdge('b','f');
// graph.addEdge('c','g');
// graph.addEdge('c','d');
// graph.addEdge('d','g');
// graph.addEdge('d','h');
// graph.addEdge('e','i');

// console.log(graph.toString());
// graph.BFS('a',console.log);
// graph.dfs(console.log);