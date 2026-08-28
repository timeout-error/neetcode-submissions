class Trie {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class PrefixTree {
    constructor() {
        this.root=new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr=this.root;
        for(let i=0;i<word.length;i++){
            if(!curr.children.has(word[i])){
                curr.children.set(word[i],new Trie());
            }
           curr=curr.children.get(word[i]);
        }
        curr.end=true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr=this.root;
        for(let i=0;i<word.length;i++){
            if(!curr.children.has(word[i])){
                return false;
            }
           curr=curr.children.get(word[i]);
        }
        return curr.end==true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr=this.root;
        for(let i=0;i<prefix.length;i++){
            if(!curr.children.has(prefix[i])){
                return false;
            }
           curr=curr.children.get(prefix[i]);
        }
        return true;
    }
}
