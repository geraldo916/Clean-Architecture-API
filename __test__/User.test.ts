import UserRepositoryMemory from "../src/infra/repositories/userRepositoryMemory"
import SaveUser from "../src/core/usecases/SaveUser"
import UpdateUser from "../src/core/usecases/UpdateUser";
import DeleteUser from "../src/core/usecases/DeleteUser";
import User from "../src/core/Entity/User";
import bcrypt from 'bcrypt'
import Login from "../src/core/usecases/Authentication";
import JwtAdapter from "../src/adapters/criptography/jwt-adapter";
import HashPasswordWithBcrypt from "../src/adapters/criptography/bcryptAdapter";
import PasswordRecovery from "../src/core/usecases/PasswordRecovery";
import ChangePassword from "../src/core/usecases/ChangePassword";

const secret = "agsdhkgshkdghagsdegugaklgdsal";

describe("ChackUseCasesUser",()=>{
    const hashEncrypt = new HashPasswordWithBcrypt()
    const userReposiroty = new UserRepositoryMemory(hashEncrypt)
    const saveUser = new SaveUser(userReposiroty);
    const deleUser = new DeleteUser(userReposiroty);
    const authJwt = new JwtAdapter(secret);
    const userLogin = new Login(hashEncrypt,userReposiroty,authJwt);
    const passwordRecovery = new PasswordRecovery(authJwt,userReposiroty);
    const changePassword = new ChangePassword(userReposiroty,authJwt);

    it("Should save an user",async ()=>{
        const newUser = new User(2,"geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916", 2);
        expect(userReposiroty.myUsers.length).toBe(0);
        await saveUser.run(newUser);
        expect(userReposiroty.myUsers.length).toBe(1);
    })
    it("Should return an user",async ()=>{
        const user = await userReposiroty.getUserById(2)
        expect(user.name).toBe("geraldo munhika")
    })

    it("Should return a cople of users",async()=>{
        const users = await userReposiroty.getAllUsers()
        expect(users.length).toBe(1);
    })

    it("Should update an user with new elements",async ()=>{
        const user = new UpdateUser(userReposiroty);
        const newUser = new User(2,"Samuel Albino","geraldo00","geraldo@gmail.com","geraldo916", 2);
        const userFound = await userReposiroty.getUserById(2)
        expect(userFound.name).toBe("geraldo munhika")
        user.update(newUser);
        expect(userFound.name).toBe("Samuel Albino")
    })

    it("Should return a Hash",async ()=>{
        const newUser = new User(2,"geraldo Samuel","geraldo00","geraldo@gmail.com","geraldo916", 2);
        const userFound = await userReposiroty.getUserById(2)
        expect(true).toBe(await bcrypt.compare(newUser.password,userFound.password));
    })

    it("Should delete one user",()=>{
        let myUserQuantity = userReposiroty.myUsers.length
        deleUser.run(2)
        expect(userReposiroty.myUsers.length).toBe(myUserQuantity-1);
    })

    it("Should return a user payload",async ()=>{
       const newUser = new User(2,"geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916", 2);
       await saveUser.run(newUser);

       const token = await userLogin.run({password:"geraldo00",email:"geraldo@gmail.com"});
       const payload = await authJwt.decrypt(token)
       expect(payload.id_user).toBe(2);
    })
    it("Should create a recovery password token",async()=>{
        const token = await passwordRecovery.execute('geraldo@gmail.com');
        const tokenData = await authJwt.decrypt(token);
        expect(tokenData.email).toBe('geraldo@gmail.com')
    })
    it("Should change the password",async ()=>{
        const tokenData = await passwordRecovery.execute('geraldo@gmail.com');
        await changePassword.run({token:tokenData,newPassword:"geraldooo"});

        const token = await userLogin.run({password:"geraldooo",email:"geraldo@gmail.com"});
        const payload = await authJwt.decrypt(token)
        expect(payload.id_user).toBe(2);
    })
})

