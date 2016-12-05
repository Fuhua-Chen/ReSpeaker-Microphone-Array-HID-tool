rd /s ./node-hid/build
rd /s ./node-hid/node_modules
del ./node-hid/hidapi/*.*
cd ./node-hid/
npm install
cd ../
Pause