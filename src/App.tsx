import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";

function App() {
  async function sayHello() {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }

    if (permissionGranted) {
      sendNotification({ title: "Mochiiiii", body: "Nice to meet you!" });
    }
  }

  return (
    <main className="flex">
      <h1>Hellooooooo</h1>
      <button onClick={sayHello}>Press Me</button>
    </main>
  );
}

export default App;
