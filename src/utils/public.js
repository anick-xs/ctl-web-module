export default {
    install: function (Vue) {
        // 深拷贝
        Vue.prototype.deepCopy = function(data){
            let array = data && data.constructor === Array
            let object = data && data.constructor === Object
            let o;
            if (array) {
                o = [];
            } else if (object) {
                o = {};
            } else {
                return data;
            }

            if (array) {
                for (let i = 0; i < data.length; i++) {
                    o.push(this.deepCopy(data[i]));
                }
            } else if (object) {
                for (let i in data) {
                    o[i] = this.deepCopy(data[i]);
                }
            }
            return o;
        }
    }
}
