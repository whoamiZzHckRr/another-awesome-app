const app = require("express")();

app.listen(3000, (err)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log("listening on port 3000")
	}
});