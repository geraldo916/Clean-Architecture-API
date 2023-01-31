import TokenGenerator from '../../core/protocols/criptography/TokenGenerator'
import jwt from 'jsonwebtoken'

export default class JwtAdapter implements TokenGenerator{
  constructor (private readonly secret: string) {}

  async encrypt (data: any): Promise<string> {
    return jwt.sign(data, this.secret);
  }

  async decrypt (token: string): Promise<any> {
    return jwt.verify(token, this.secret)
  }
}
