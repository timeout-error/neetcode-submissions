class Node {
    constructor(_key, _val) {
        this.key = _key;
        this.val = _val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    addNodeToFront(node) {
        let headNext = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = headNext;
        headNext.prev = node;
    }

    deleteNode(node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        let node = this.map.get(key);
        this.deleteNode(node);
        this.addNodeToFront(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            this.deleteNode(node);
            node.val = value;
            this.addNodeToFront(node);
            return;
        }

        if (this.map.size === this.capacity) {
            let lastbeforeTail = this.tail.prev;
            this.deleteNode(lastbeforeTail);
            this.map.delete(lastbeforeTail.key);
        }

        let node = new Node(key, value);
        this.map.set(key, node);
        this.addNodeToFront(node);
    }
}
