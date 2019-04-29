function BindValue(obj, value, callback){    
    Object.defineProperty(obj, value, {
        get: function() {
            return value;
        },
        set: function(val) {
            value = val;
            callback(val);
        }
    })
}