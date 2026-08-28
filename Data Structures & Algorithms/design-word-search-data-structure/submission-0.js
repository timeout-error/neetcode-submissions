class Trie {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!curr.children.has(word[i])) {
                curr.children.set(word[i], new Trie());
            }
            curr = curr.children.get(word[i]);
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        // console.log("and", this.root);

        let queue = [];
        queue.push([curr, 0]);
        // let i = 0;

        while (queue.length) {

            let [node,i]=queue.shift();

            let ch=word[i];

            if(i===word.length){
                return node.end==true;
            }

            if ( ch == ".") {
                for (let child of node.children.values()) {
                    queue.push([child, i + 1]);
                }
            } else if(node.children.get(ch)){
                queue.push([node.children.get(ch), i + 1]);
            }
        }
        return false;
    }
}
