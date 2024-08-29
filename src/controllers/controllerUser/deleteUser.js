import { deleteUser } from "../../models/userModel.js";

const userDelete = async (req, res) => {

    const {id}  = req.params
  
    const user =  await deleteUser(+id)

    if(!user)
        return res.status(404).json({
        error: "Usuário não encontrado"
      })

    return res.json({
      success: "Usuário removido com sucesso",
      user: result
    })
  } 
  
  export default deleteUser