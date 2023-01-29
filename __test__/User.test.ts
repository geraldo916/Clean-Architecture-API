import UserRepositoryMemory from "../src/infra/repositories/userRepositoryMemory"
import GetUser from "../src/core/usecases/GetUser";
import HashPasswordWithBcrypt from "../src/adapters/bcryptAdapter";
import SaveUser from "../src/core/usecases/SaveUser"
import UpdateUser from "../src/core/usecases/UpdateUser";
import DeleteUser from "../src/core/usecases/DeleteUser";
import User from "../src/core/Entity/User";
import bcrypt from 'bcrypt'

describe("ChackUseCasesUser",()=>{
    const hashEncrypt = new HashPasswordWithBcrypt()
    const userReposiroty = new UserRepositoryMemory(hashEncrypt)
    const getUser = new GetUser(userReposiroty);
    const saveUser = new SaveUser(userReposiroty);
    const deleUser = new DeleteUser(userReposiroty);

    it("Should save an user",async ()=>{
        const newUser = new User(2,"geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916", 2);
        expect(userReposiroty.myUsers.length).toBe(0);
        await saveUser.run(newUser);
        expect(userReposiroty.myUsers.length).toBe(1);
    })

    it("Should return an user",async ()=>{
        const user = await getUser.getUserById(2)
        expect(user.name).toBe("geraldo munhika")
    })

    it("Should return a cople of users",async()=>{
        const users = await getUser.getUsers()
        expect(users.length).toBe(1);
    })

    it("Should update an user with new elements",async ()=>{
        const user = new UpdateUser(userReposiroty);
        const newUser = new User(2,"Samuel Albino","geraldo00","geraldo@gmail.com","geraldo916", 2);
        const userFound = await getUser.getUserById(2)
        expect(userFound.name).toBe("geraldo munhika")
        user.update(newUser);
        expect(userFound.name).toBe("Samuel Albino")
    })

    it("Should return a Hash",async ()=>{
        const newUser = new User(2,"geraldo Samuel","geraldo00","geraldo@gmail.com","geraldo916", 2);
        const userFound = await getUser.getUserById(2)
        expect(true).toBe(await bcrypt.compare(newUser.password,userFound.password));
    })

    it("Should delete one user",()=>{
        let myUserQuantity = userReposiroty.myUsers.length
        deleUser.run(2)
        expect(userReposiroty.myUsers.length).toBe(myUserQuantity-1);
    })

})

