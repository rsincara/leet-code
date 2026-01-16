const LIFETIME_MS = 3000;

var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);

    let isQueueReady = false;

    while (!isQueueReady) {
        const value = this.queue[0];

        if (t - LIFETIME_MS > value) {
            this.queue.shift();
        } else {
            isQueueReady = true;
        }
    }

    return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:

 */
const obj = new RecentCounter();
const param_1 = obj.ping(1);
const param_2 = obj.ping(100);
const param_3 = obj.ping(3001);
const param_4 = obj.ping(3002);

module.exports = RecentCounter;