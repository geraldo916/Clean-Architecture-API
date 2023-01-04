import UserRepositoryMemory from "../../infra/repositories/userRepositoryMemory"
import GetUser from "../usecases/GetUser";
import SaveUser from "../usecases/SaveUser"
import UpdateUser from "../usecases/UpdateUser";
import User from "./User";

describe("ChackUseCasesUser",()=>{
    const userReposiroty = new UserRepositoryMemory()
    const getUser = new GetUser(userReposiroty);
    const saveUser = new SaveUser(userReposiroty);

    it("Should save an user",()=>{
        const newUser = new User(2,"geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916", 2);
        expect(userReposiroty.myUsers.length).toBe(0);
        saveUser.run(newUser);
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

})