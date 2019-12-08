var dbHost = process.env.dbHost || "localhost";
module.exports = {
  name: "VRSocial",
  title: "VRSocial",
  commands: {
    package:
      "electron-packager electron.js spruce --electronVersion=2.0.12 --overwrite --icon=/public/images/logo/logo.png --prune=true --out=release",
    build: ""
  },
  http: {
    host: "erptime.ga",
    port: 3020
  },
  author: "Divy Srivastava",
  version: "2.0.0",
  db: {
    connectionUri: "mongodb://" + dbHost + ":27017/spruce",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
