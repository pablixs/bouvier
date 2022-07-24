// Destructuring
const {query} = require("../config/newconnect")


class Admin{
    static async getByAdminUser(admin_user){
        try {
            const admin = await query("SELECT * FROM admins WHERE admin_nombre=?",[admin_user])
            return {
                success:true,
                admin:admin[0]
            }
        } catch (error) {
            console.log(error)
            return {
                success:false,
                message:"El usuario no existe"
            }
        }
    }
}

module.exports = Admin