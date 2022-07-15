const fs = require('fs')
const path = require('path')
const _package = require('../package.json')
const fileName = `${_package.name}.umd.d.ts`

const data = `declare module "${_package.name}";`


const root = path.resolve(__dirname, '..')
const _path = path.join(root, '/lib')

fs.writeFile(`${_path}/${fileName}`, data, err => {
    if (err) console.log(err)
    else console.log('success')
})