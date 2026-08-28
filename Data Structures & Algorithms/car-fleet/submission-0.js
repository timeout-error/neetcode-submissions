class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars=[];
        for(let i=0;i<position.length;i++){
            let leftTime=(target-position[i])/speed[i];
            cars.push([position[i],leftTime]);
        }
        cars.sort((a,b)=>b[0]-a[0]);
        let ans=0;
        let maxiTime=0;
        for(let i=0;i<cars.length;i++){
           if(cars[i][1] > maxiTime){
                ans++;
                maxiTime=cars[i][1];
           }
        }
        return ans;
    }
}


