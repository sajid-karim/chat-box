"use client"
import { useState } from "react"

interface Message {
  id: string
  sender: string
  content: string
  isAI: boolean
  suggested?: boolean
}



export default function MessageContainer() {
  const [messages] = useState<Message[]>([
    {
      id: "1",
      sender: "Vanilla AI",
      content:
        "Oh no! Sad to hear that, but of course we can give a refund. Can you please provide your order number if you have one? Or email that you've used to make this purchase.",
      isAI: true,
      suggested: true,
    },
  ])
  return (
    <div className="w-full max-w-4xl mx-auto mb-4">
      <div className="space-y-6">
        {messages.map((message) => (
          <div key={message.id} className="w-full">
            {message.isAI && (
              <div className="rounded-xl bg-[#0062FF15] p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800">{message.sender}</span>
                    {message.suggested && <span className="text-[#6b7280] text-xs">Suggested</span>}
                  </div>
                  {message.suggested && (
                    <button className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow-rotate-right-left, repeat, refresh">
                          <g id="Vector">
                            <path d="M12.6665 8C12.6665 8.36667 12.9665 8.66667 13.3332 8.66667H13.3398C13.7065 8.66667 14.0065 8.36667 14.0065 8C14.0065 4.68667 11.3198 2 8.00651 2C6.48651 2 5.07984 2.57333 4.00651 3.51333V2.66667C4.00651 2.3 3.70651 2 3.33984 2C2.97318 2 2.67318 2.3 2.67318 2.66667L2.67318 5.33333C2.67318 5.34667 2.67651 5.36 2.67984 5.37333C2.68318 5.38667 2.68651 5.4 2.68651 5.41333C2.69318 5.46 2.69984 5.5 2.71318 5.54667C2.7231 5.57645 2.73673 5.60253 2.75129 5.63043C2.75629 5.64 2.7614 5.64978 2.76651 5.66C2.7734 5.67033 2.77984 5.68022 2.78607 5.68978C2.80395 5.71722 2.82007 5.74194 2.83984 5.76667C2.86651 5.80667 2.89984 5.83333 2.93984 5.86C2.94833 5.86566 2.95562 5.87372 2.96324 5.88214C2.97356 5.89357 2.98449 5.90566 2.99984 5.91333C3.01318 5.92667 3.02651 5.92667 3.03984 5.92667C3.06901 5.94125 3.09817 5.94874 3.12992 5.9569C3.14171 5.95993 3.15387 5.96305 3.16651 5.96667C3.20651 5.98 3.24651 5.99333 3.29318 5.99333C3.30651 5.99333 3.33318 6 3.33318 6L5.99984 6C6.36651 6 6.66651 5.7 6.66651 5.33333C6.66651 4.96667 6.36651 4.66667 5.99984 4.66667H4.69984C5.55318 3.84667 6.72651 3.33333 7.99984 3.33333C10.5798 3.33333 12.6665 5.42 12.6665 8Z" fill="#000107" fill-opacity="0.8824"/>
                            <path d="M8 12.6667C5.42 12.6667 3.33333 10.58 3.33333 8C3.33333 7.63333 3.03333 7.33333 2.66667 7.33333C2.3 7.33333 2 7.63333 2 8C2 11.3133 4.68667 14 7.99333 14C9.52 14 10.9267 13.42 12 12.48V13.3333C12 13.7 12.3 14 12.6667 14C13.0333 14 13.3333 13.7 13.3333 13.3333V10.66C13.3333 10.6133 13.32 10.5667 13.3067 10.52C13.3 10.5067 13.3 10.4867 13.3 10.4733C13.28 10.4067 13.2533 10.3467 13.2133 10.2933C13.2067 10.2867 13.2017 10.2783 13.1967 10.27C13.1917 10.2617 13.1867 10.2533 13.18 10.2467C13.14 10.2 13.0867 10.16 13.0333 10.12C13.0286 10.1153 13.0247 10.1106 13.0211 10.1061C13.0144 10.0981 13.0086 10.091 13 10.0867C12.9933 10.08 12.9867 10.08 12.98 10.08C12.9333 10.0533 12.88 10.04 12.8267 10.0267C12.8124 10.0243 12.799 10.0211 12.7858 10.0179C12.7621 10.0122 12.7391 10.0067 12.7133 10.0067C12.7 10.0067 12.6733 10 12.6733 10L10.0067 10C9.64 10 9.34 10.3 9.34 10.6667C9.34 11.0333 9.64 11.3333 10.0067 11.3333L11.3 11.3333C10.4467 12.1533 9.27333 12.6667 8 12.6667Z" fill="#000107" fill-opacity="0.8824"/>
                          </g>
                        </g>
                      </svg>
                      <span className="text-black font-medium text-xs leading-4">Regenerate</span>
                    </button>
                  )}
                </div>
                <p className="text-gray-800 font-normal text-sm leading-5 mb-4">{message.content}</p>
                {message.suggested && (
                  <button className="mt-1 underline text-black hover:bg-gray-100 py-1 bg-transparent rounded font-medium text-sm leading-5">
                    Reply with this message
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}