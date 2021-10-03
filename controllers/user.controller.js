const { getManager } = require("typeorm");


const register = async (req, res) => {
    try {
        let data;
        const uemail = req.body.email;
        const uname = req.body.name;
        const uphn = req.body.phone;
        console.log(uemail);
        await getManager().transaction(async (transactionalEntityManager) => {
             data = await getManager().query(`SELECT * FROM public.createUsers($1, $2, $3)`, [uname, uemail, uphn]);
        })

        // await getManager().transaction(async (transactionalEntityManager) => {
        //     const models = <Model[]>(
        //       await getManager().query("select * from get_models()")
        //     );
        res.send(data);
    }
    catch (error) {
        console.log("error");

    }
}


module.exports = {
    register
}