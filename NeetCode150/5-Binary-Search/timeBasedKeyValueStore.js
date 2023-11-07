var TimeMap = function() {
    this.map = new Map();  
  };
  
  /** 
   * @param {string} key 
   * @param {string} value 
   * @param {number} timestamp
   * @return {void}
   */
  TimeMap.prototype.set = function(key, value, timestamp) {
      if(!this.map.has(key)) {
          this.map.set(key, []);
      }
      this.map.get(key).push([value, timestamp]);
  };
  
  /** 
   * @param {string} key 
   * @param {number} timestamp
   * @return {string}
   */
  TimeMap.prototype.get = function(key, timestamp) {
      let arr = this.map.get(key) || [];
  
      let left =  0;
      let right = arr.length - 1;
      let res = "";
  
      while(left <= right) {
          let mid = parseInt((left + right) / 2);
  
          let [v, t] = arr[mid];
          if(timestamp == t) return v;
          if(timestamp >= t) {
              left = mid + 1;
              res = v;
          } else  {
              right = mid - 1;
          }
      }
      return res;
  };