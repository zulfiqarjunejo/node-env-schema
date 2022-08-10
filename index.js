// Configuration ;)
const envSchema = require('env-schema');

const schema = {
  type: 'object',
  required: [ 'PORT', 'HOST' ],
  properties: {
    PORT: {
      type: 'number',
      default: 3000
    },
    HOST: {
        type: 'string',
      }
  }
};

const config = envSchema({
    schema: schema,
    // data: data, // optional, default: process.env
    // dotenv: true // load .env if it is there, default: false
    // or you can pass DotenvConfigOptions
    // dotenv: {
    //   path: '/custom/path/to/.env'
    // }
});

function getPort() {
    let port = process.env.PORT;
    if ((port === undefined) || (port === null)) {
        throw ("Required environment variable PORT is missing.");
    }
    return port;
}

function getPortSimple() {
    return config.PORT;
}

// Action ;)
console.log("config", config)

// console.log("port", getPort());
// console.log("port", getPortSimple());
console.log("HOST", config.HOST);
console.log("PORT", config.PORT);

console.log("Hi");