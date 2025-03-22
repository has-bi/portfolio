import Image from "next/image";
import ChatWindow from "./components/ChatWindow";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Chat Window Demo</h1>
      <div className="w-full max-w-md">
        <ChatWindow />
      </div>
    </div>
  );
}
