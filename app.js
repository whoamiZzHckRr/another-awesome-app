const router = require("express").Router();

router.get("/awesome/feature", (req,res,next)=>{
	res.send({"success":true, msg: "hello world from awesome feature"});
});

router.get("/main", (req,res,next)=>{
	console.log("main route here");
	res.send({"success":true, msg: "hello world lol"});
});

module.exports = router;