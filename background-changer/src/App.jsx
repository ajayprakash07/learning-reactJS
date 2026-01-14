import { useState } from "react"

function App() {
  const [colour, setColour] = useState("orange")
  const [size1, setSize1] = useState("var(--text-3xl)")
  let [tex , setTex]  = useState("TEST ME")

  return (
    <>
      <div className="w-full h-screen"
      style={{backgroundColor: colour}}
      >
  
        <div className="min-h-screen flex items-center justify-center gap-5">
          <input id="taker" type="text" placeholder="Enter your name" className="border p-2 bg-white border-width border-black border-solid px-5 py-3" value={tex} onChange={(e) => setTex(e.target.value)}
          />
          <br />
          <h1 className="font-bold border-dotted border-black border-2 px-5 py-5"
          style={{fontSize: size1}}>{tex || "TEST ME" }
          </h1>
        </div>

        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-[oklch(93.8%_0.127_124.321)] rounded-xl px-6 py-2 shadow-red-500">
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1 text-violet-400 bg-black dark:md:hover:bg-fuchsia-100"
            onClick={() => setSize1("var(--text-xl)")}>Small</button>
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1 text-violet-400 bg-black dark:md:hover:bg-fuchsia-100"
            onClick={() => setSize1("var(--text-4xl)")}>Medium</button>
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1 text-violet-400 bg-black dark:md:hover:bg-fuchsia-100"
            onClick={() => setSize1("var(--text-8xl)")}>Large</button>
          </div>
        </div>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-xl px-3 py-2">
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1"
            style={{backgroundColor: "green"}}
            onClick={() => setColour("green")}>Green</button>
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1"
            style={{backgroundColor: "red"}}
            onClick={() => setColour("red")}>Red</button>
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1"
            style={{backgroundColor: "yellow"}}
            onClick={() => setColour("yellow")}>Yellow</button>
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1"
            style={{backgroundColor: "white"}}
            onClick={() => setColour("White")}>White</button>
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1"
            style={{backgroundColor: "blue"}}
            onClick={() => setColour("blue")}>Blue</button>
            <button
            className="outline-none px-4 rounded-xl shadow-lg px-1 py-1"
            style={{backgroundColor: "pink"}}
            onClick={() => setColour("pink")}>Pink</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
