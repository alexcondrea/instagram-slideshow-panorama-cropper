import sharp from 'sharp'
import path from 'path'

const imagePath = process.argv[2];

const width = 1080
const height = 1080

const dir = path.dirname(imagePath)

const ext = path.extname(imagePath)
const name = path.basename(imagePath, ext) 

sharp.cache(false)

let idx = 0

sharp(imagePath)
.extract({ left: idx*width, top: 0, width, height })
.png()
.toFile(`${dir}/${name}_${idx++}${ext}`, function(err) { if (err) console.error(err)})
.extract({ left: idx*width, top: 0, width, height })
.png()
.toFile(`${dir}/${name}_${idx++}${ext}`, function(err) { if (err) console.error(err)})
.extract({ left: idx*width, top: 0, width, height })
.png()
.toFile(`${dir}/${name}_${idx++}${ext}`, function(err) { if (err) console.error(err)})
.extract({ left: idx*width, top: 0, width, height })
.png()
.toFile(`${dir}/${name}_${idx++}${ext}`, function(err) { if (err) console.error(err)})
.extract({ left: idx*width, top: 0, width, height })
.png()
.toFile(`${dir}/${name}_${idx++}${ext}`)
.then(() => { console.log('done') })
