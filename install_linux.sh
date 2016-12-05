rm -rf ./node-hid/build
rm -rf ./node-hid/node_modules
rm -rf ./node-hid/hidapi/*.*
cd ./node-hid/
npm install
cd ../
read -p "Press any key to continue."