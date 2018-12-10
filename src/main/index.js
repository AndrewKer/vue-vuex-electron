import { app, BrowserWindow} from 'electron';


app.on('ready', () => {
  let window = new BrowserWindow(
    {
      title: 'App'
      //icon:'./src/renderer/assets/logo.png'
    }
  );
  window.loadURL('http://localhost:9080/');
});