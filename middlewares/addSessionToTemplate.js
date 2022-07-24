function addSessionToTemplate(config){
    return function(req,res,next,err){
        const admin = req.session.admin
        res.locals.admin = admin  
        next()
    }
}

module.exports = addSessionToTemplate
