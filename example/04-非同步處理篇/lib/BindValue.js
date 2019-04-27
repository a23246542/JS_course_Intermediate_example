
function BindValue(obj, value, callback){    
    Object.defineProperty(obj, value, {
        set: function(value) {
            callback(value);
        }
    })
}