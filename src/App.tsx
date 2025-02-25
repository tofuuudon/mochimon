import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";
import WindowButton from "./components/WindowButton";

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
    <main className="flex h-screen flex-col rounded-[32px] border-4 border-blue-400 bg-blue-200 p-4">
      <div className="mb-4 flex items-center space-x-1.5">
        <WindowButton type="close" />
        <WindowButton type="minimize" />
      </div>
      <div className="h-full w-full rounded-[16px] border-2 border-blue-400 p-4">
        <h1>Hellooooooo</h1>
        <button onClick={sayHello}>Press Me</button>
      </div>
    </main>
  );
}

export default App;
