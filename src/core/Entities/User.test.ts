import UserRepositoryMemory from "../../infra/repositories/userRepositoryMemory"
import SaveUser from "../usecases/SaveUser"
import User from "./User";


test("Should save an user",()=>{
    const userReposiroty = new UserRepositoryMemory()
    const saveUser = new SaveUser(userReposiroty);
    const newUser = new User("my_id","geraldo munhika","geraldo00","geraldo@gmail.com","geraldo916");
    saveUser.run(newUser);


})