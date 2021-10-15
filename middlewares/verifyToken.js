const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(403).json({
            error: {
                code: 403,
                msg: 'Usuaro no autorizado'
            }
        });
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(verified);
        next();
    } catch (error) {
        return res.status(403).json({
            error: {
                code: 403,
                msg: 'Usuaro no autorizado'
            }
        });
    }

}

module.exports = verifyToken;