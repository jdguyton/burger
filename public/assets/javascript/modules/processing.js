var processing = {
    printQuestionMarks: function(num) {
        var arr = [];
      
        for (var i = 0; i < num; i++) {
          arr.push("?");
        }
      
        return arr.toString();
      },
      objToSql: function (ob) {
        var arr = [];
        for (var key in ob) {
          var value = ob[key];
          if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
          }
        }
        return arr.toString();
      }
}

module.exports = processing;