class MinStack {
    constructor() {
        this.stack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
       this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if(!this.stack.length) return null;
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if(!this.stack.length) return null;
        let topElement=this.stack[this.stack.length-1];
        return topElement;
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length === 0) return null;
        
        let len=this.stack.length-1;

        let min=this.stack[len];

        while(len>=0){
            min=Math.min(min,this.stack[len]);
            len--;
        }
        return min;
    }
}
