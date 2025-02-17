import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";
import "./titlebar.css";

function App() {
  async function sayHello() {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }

    if (permissionGranted) {
      sendNotification({ title: "Tauri", body: "Tauri is awesome!" });
    }
  }

  return (
    <main className="container">
      <h1>Welcome to Mochimon</h1>
      <button onClick={sayHello}>Press Me</button>
    </main>
  );
}

export default App;
