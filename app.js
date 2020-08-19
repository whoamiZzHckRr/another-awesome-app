const router = require("express").Router();

router.get("/main", (req,res,next)=>{
	res.send({"success":true, msg: "hello world"});
});

module.exports = router;