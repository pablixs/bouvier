const Admin = require("../models/Admin")
const {
    query
} = require("../config/newconnect")
// const userModel = new User()

class AuthController {
    // static: Nos permite usar atributos y métodos de la clase sin crear una instancia (objeto)
    static async login(req, res) {
        // const email = req.body.email
        // const password = req.body.password

        const {
            admin_user,
            admin_password
        } = req.body

        const {
            success,
            admin
        } = await Admin.getByAdminUser(admin_user)

        if (success && admin) {
            try {
                if (admin_password === admin.admin_password) {
                    req.session.admin = {
                        name: admin.admin_nombre,
                        loggedIn: true,
                        id: admin.admin_id
                    }
                    console.log(req.session.admin)
                    return res.redirect('/admin')
                }
            } catch (error) {
                console.log(error)
            }
        }
        return res.render('admin/login', {
            title: 'Iniciar sesion',
            error: "Credenciales incorrectas",
            datos: {
                admin_user,
            }
        })
    }

    static logout(req, res) {
        req.session.destroy()
        return res.redirect("/admin/login")
    }
}

module.exports = AuthController