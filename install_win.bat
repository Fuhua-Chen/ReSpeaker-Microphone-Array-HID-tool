rd /s /q .\node-hid\build
rd /s /q .\node-hid\node_modules
Del /q /a .\node-hid\hidapi\*.*
cd .\node-hid\
npm install
cd ..\
Pause