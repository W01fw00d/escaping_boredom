echo "Linking react..."
cd ../chemistry-ui/node_modules/react
npm link
cd ../../../escaping_boredom
npm link react
echo "Linking react-router-dom..."
cd ../chemistry-ui/node_modules/react-router-dom
npm link
cd ../../../escaping_boredom
npm link react-router-dom
echo "Linking chemistry-ui..."
cd ../chemistry-ui
npm link
cd ../escaping_boredom
npm link chemistry-ui
echo "Finished!"
