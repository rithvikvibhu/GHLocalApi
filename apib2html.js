#!/usr/bin/env node

const fse = require('fs-extra');
const aglio = require('aglio');

(async function() {
    let distDir = './dist';
    // await fse.emptyDir(distDir);
    aglio.renderFile(`./all.apib`, `${distDir}/index.html`, {themeTemplate: 'triple'}, (err, warnings)=> {
        if (err) return console.log(err);
        if (warnings) console.log(warnings);
    });
})();
