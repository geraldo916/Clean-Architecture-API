import UserRepositoryMemory from "../src/infra/repositories/userRepositoryMemory"
import UserRepositoryMongoDB from "../src/infra/repositories/UserRepositoryMongoDB";
import SaveUser from "../src/core/usecases/SaveUser"
import UpdateUser from "../src/core/usecases/UpdateUser";
import DeleteUser from "../src/core/usecases/DeleteUser";
import User from "../src/core/Entity/User";
import bcrypt from 'bcrypt'
import Login from "../src/core/usecases/Authentication";
import JwtAdapter from "../src/adapters/criptography/jwt-adapter";
import HashPasswordWithBcrypt from "../src/adapters/criptography/bcryptAdapter";
import PasswordRecovery from "../src/core/usecases/PasswordRecovery";
import ChangePassword from "../src/core/usecases/ChangePasswordRecovery";
import ChangePasswordRecovery from "../src/core/usecases/ChangePasswordRecovery";
import dotenv from 'dotenv'


dotenv.config();
const secret = process.env.TOKEN_SECRET;

describe("ChackUseCasesUser",()=>{

    jest.setTimeout(10000);

    const hashEncrypt = new HashPasswordWithBcrypt()
    const userReposiroty = new UserRepositoryMongoDB()
    const saveUser = new SaveUser(userReposiroty,hashEncrypt);
    const deleUser = new DeleteUser(userReposiroty);
    const authJwt = new JwtAdapter(secret);
    const userLogin = new Login(hashEncrypt,userReposiroty,authJwt);
    const passwordRecovery = new PasswordRecovery(authJwt,userReposiroty);
    const changePassword = new ChangePasswordRecovery(userReposiroty,authJwt,hashEncrypt);

    it("Should save an user",async ()=>{
        const newUser = new User('2',"geraldo arcanjo","geraldo090","geraldochara@gmail.com","geraldo7600", 2);
        let allUsersOld = await userReposiroty.getAllUsers();
        await saveUser.run(newUser);
        let allUsersNew = await userReposiroty.getAllUsers(); 
        expect(allUsersNew.length).toBe(allUsersOld.length+1);
    })
    it("Should return an user",async ()=>{
        const user = await userReposiroty.getUserByEmail("geraldochara@gmail.com");
        expect(user.name).toBe("geraldo munhika")
    })

    it("Should return a cople of users",async()=>{
        const users = await userReposiroty.getAllUsers()
        expect(users.length).toBeGreaterThan(0);
    })

    it("Should update an user with new elements",async ()=>{
        const user = new UpdateUser(userReposiroty);
        const newUser = new User("2","Samuel Albino","geraldo00","geraldo@gmail.com","geraldo916", 2);
        const userFound = await userReposiroty.getUserByEmail("geraldochara@gmail.com")
        expect(userFound.name).toBe("geraldo munhika")
        await user.update(userFound._id,newUser);
        expect(userFound.name).toBe("Samuel Albino")
    })

    it("Should be authorized",async ()=>{
        const userFound = await userReposiroty.getUserByEmail("geraldochara@gmail.com");
        expect(await bcrypt.compare("geraldo00",userFound.password)).toBeTruthy();
    })

    it("Should delete one user",async()=>{
        const allUsersOld = await userReposiroty.getAllUsers();
        const user = await userRepository.getUserByEmail("geraldochara@gmail.com");
        await deleUser.run(user._id);
        const allUsersNew = await userReposiroty.getAllUsers();
        expect(allUsersNew.length).toBe(allUsersOld.length-1);
    })

    it("Should return a user payload",async ()=>{
       const newUser = new User("2","geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916", 2);
       await saveUser.run(newUser);

       const token = await userLogin.run({password:"geraldo00",email:"geraldo@gmail.com"});
       const payload = await authJwt.decrypt(token)
       expect(payload.email).toBe("geraldo@gmail.com");
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
        expect(payload.email).toBe("geraldo@gmail.com");
    })
})

