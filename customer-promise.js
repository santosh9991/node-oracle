//This function will use orcledb.getConnection promise to get the data from db
const oracledb = require('oracledb');
var connAttr = {
  "user":"santosh",
  "password":"oracle",
  "connectionString":"localhost:1521/xe"
}
var data =()=>{
var res;
oracledb.getConnection(connAttr)
 .then(function(connection) {
   return connection.execute(
     "select * from demo_customers",{},
       {outFormat:oracledb.OBJECT}
   )
   .then(function(result) {
       // res.data = result;
       // console.log("sdasdf",result.rows)
       // // module.exports.result =result.rows
       // console.log('m',module.exports.result)
        // result
       return connection.close();
   }).catch(function(err) {
       console.log(err.message);
       return connection.close();
   })
 })
 .catch(function(err) { console.log(err.message); })
 console.log(res)
 // return res

};
var a = (res)=>{
  console.log("a.data:", res.rows)
  return res.rows
};
data()
// module.exports.d = data;
// console.log("after",module.exports.result)
