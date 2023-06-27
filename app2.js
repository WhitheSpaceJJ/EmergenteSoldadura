const jwt = require('jsonwebtoken');

class AuthService {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  async generateToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, this.secretKey, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
  }

  async verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secretKey, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }
}

// Example usage
const secretKey = 'your-secret-key';
const authService = new AuthService(secretKey);

(async () => {
  try {
    const payload = { userId: 12345 };
    const token = await authService.generateToken(payload);
    console.log('Generated token:', token);
    const a=token;

    const decoded = await authService.verifyToken(a);
    console.log('Decoded payload:', decoded);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();