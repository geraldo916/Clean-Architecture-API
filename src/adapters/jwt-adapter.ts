import TokenGenerator from '../../criptography/tokenGenerator'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements TokenGenerator{
  constructor (private readonly secret: string) {}

  async encrypt (data: any): Promise<string> {
    return jwt.sign(data, this.secret);
  }

  async decrypt (token: string): Promise<string> {
    return jwt.verify(token, this.secret) as any
  }
}
