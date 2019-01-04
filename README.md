# Estrutura Microsserviço

---

Implementação simples em nodejs para microsserviço com framework [express-js](https://expressjs.com/pt-br/starter/installing.html).

```bash
git clone git@github.com:rederlo/basic-micro-service.git
```
---

### Estrutura de diretórios

```
├── /src/                      # Código fonte do Microsserviço
│   ├── /config/               # Configurações (Auth, Aws, etc...)
│   ├── /controllers/          # Controllers
│   ├── /database/             # Mongo ou Mysql, volumes docker
│   ├── /middlewares/          # Definição de middlewares 
│   ├── /models/               # Definição de modelos (Mongoose ou SQL) 
```
---

### Padrão
 
Adotamos o Docker em nossos apps, para desenvolvimento fica opicional mas lembre-se ao finalizar é importante deixar-lo funcional configurando o arquivo [docker-compose.yml](./docker-compose.yml) caso contrario o serviço fica incompleto.

---

#### Regras de arquivos
```
├── /src/
|   ├── /config/
|       ├── auth.js
|       ├── aws.js
|       ├── mail.js
|   ├── /controllers/
|       ├── UsersController.js
```

##### auth.js
```json
{
    "secret": "************"
}
```

##### aws.js
```json
{
    "accessKeyId": "************",
    "secretAccessKey": "************",
    "region": "************"
}
```

##### mail.js
```json
{
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "user": "************",
    "pass": "************"
}
```

##### UsersController.js
```js
import User from '../models/User'
import express from 'express'

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        return res.status(400).send({ error });
    }
});

module.exports = app => app.use('/users', router);
```

---

###### Tudo muito simples e funcional qualquer sujestão é muito bem vinda.

+ [ES6](https://babeljs.io/docs/en/learn.html)
+ [Express-js](https://expressjs.com/pt-br/starter/installing.html)
+ [Docker](https://www.docker.com/get-started#nav-developer)
+ [Jwt](https://www.npmjs.com/package/jsonwebtoken)
+ [Aws](https://www.npmjs.com/package/aws-sdk)
+ [Mongoose](https://www.npmjs.com/package/mongoose)
+ [Sequelize](https://www.npmjs.com/package/sequelize) 