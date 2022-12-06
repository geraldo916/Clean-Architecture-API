import UserRepositoryMemory from "../../infra/repositories/userRepositoryMemory"
import GetUser from "../usecases/GetUser";
import SaveUser from "../usecases/SaveUser"
import User from "./User";

describe("ChackUseCasesUser",()=>{
    const userReposiroty = new UserRepositoryMemory()
    it("Should save an user",()=>{
        const saveUser = new SaveUser(userReposiroty);
        const newUser = new User(2,"geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916");
        expect(userReposiroty.myUsers.length).toBe(0);
        saveUser.run(newUser);
        expect(userReposiroty.myUsers.length).toBe(1);
    })

    it("Should return an user",async ()=>{
        const getUser = new GetUser(userReposiroty);
        const user = await getUser.getUserById(2)
        expect(user.name).toBe("geraldo munhika")
        
    })
})
/*
test("Should save an user",()=>{
    const userReposiroty = new UserRepositoryMemory()
    const saveUser = new SaveUser(userReposiroty);
    const newUser = new User(2,"geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916");
    expect(userReposiroty.myUsers.length).toBe(0);
    saveUser.run(newUser);
    expect(userReposiroty.myUsers.length).toBe(1);
})

test("Should return an user",async ()=>{
    const userReposiroty = new UserRepositoryMemory()
    const saveUser = new SaveUser(userReposiroty);
    const newUser = new User(2,"geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916");
    saveUser.run(newUser);
    
    const getUser = new GetUser(userReposiroty);
    const user = await getUser.getUserById(2)
    expect(user.name).toBe("geraldo munhika")
    
})*/