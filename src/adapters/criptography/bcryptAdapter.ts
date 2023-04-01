import bcrypt from 'bcrypt'; 
import passwordEncryption from '../../core/protocols/criptography/PasswordEncryption';

export default class HashPasswordWithBcrypt implements passwordEncryption {

    async run(password:string):Promise<string>{
        const hash = await bcrypt.hash(password,10);
        return hash;
    }

    async compare(password: string, hash: string): Promise<boolean> {
        const result = await bcrypt.compare(password, hash);
        return result;
    }

}