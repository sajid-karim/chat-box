export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-3xl">
        <MessageContainer />
        <ChatBox />
      </div>
    </main>
  )
}

import ChatBox from "@/components/ChatBox"
import MessageContainer from "@/components/MessageContainer"

