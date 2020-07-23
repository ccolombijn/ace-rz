/*
* app/index.js
*/
'use strict';
module.exports = (app,config)=>{
    console.log('\x1b[32m[config.server.require]\x1b[0m \x1b[3mconfig/app.json\x1b[0m');
    config.server.require.forEach((module)=>{
        require(`./${module}`)(app);
        console.log('\x1b[32m',`[require]\x1b[0m \x1b[3mapp/${module}.js\x1b[0m`);
    });
};
