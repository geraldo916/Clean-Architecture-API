import User from "../Entity/User";
import passwordEncryption from "../protocols/criptography/PasswordEncryption";
import UserRepository from "../repositories/UserRepository";

export default class SaveUser{
    private userRepository:UserRepository;

    constructor(userRepository:UserRepository,private readonly passwordEncrypt:passwordEncryption){
        this.userRepository = userRepository;
    }
    async run(user:User):Promise<void>{
        user.password = await this.passwordEncrypt.run(user.password);
        await this.userRepository.save(user);
    }
}

