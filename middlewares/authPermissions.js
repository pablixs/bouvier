function authPermissions(config){

    if(config.authRequired){
        return function(req,res,next){
            if(req.session.admin && req.session.admin.loggedIn){
                console.log('Estas habilita2')
                return next()

            }
            return res.redirect("/")
        }
    }else{
        return function(req,res,next){
            if(!config.exclude.includes(req.path) && req.session.admin?.loggedIn){
                console.log('Estas arafue')
                return res.redirect("/")
            }
            return next()
        }
    }
}

module.exports = authPermissions