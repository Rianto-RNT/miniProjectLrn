const express = require("express");

const router = express.Router();

router.get("/admin", function(req, res, next){
   
    // res.json({
    //     status: 1,
    //     message: "This is a sampple message"
    // });

    res.render("admin/dashboard");

});

module.exports=router;