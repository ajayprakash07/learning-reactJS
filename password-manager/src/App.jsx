import { useState, useCallback , useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(5)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  //ref
  const passwordRef = useRef(null);

  const gen = useCallback(() => {
    let p="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(num) str+= "0123456789"
    if(char) str+= "!@#$%^&*()[]{}<>"

    for(let i=0;i<length;i++){
      let ch = Math.floor(Math.random()* str.length +1)
      p += str.charAt(ch)
    }

    setPass(p)

  },[length, num , char, setPass])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(() => {gen()},[length, num , char, gen])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-black bg-green-200 ">
        <h1 className='font-bold'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-red-200 text-gray-900 px-3 py-3 gap-1">
          <input 
            type="text"
            value={pass}
            className="rounded-lg px-2 w-full border border-black"
            placeholder='Password'
            readOnly
            ref={passwordRef}
           />
           <button className='bg-yellow-300 px-2 rounded-lg px-1 py-1 hover:bg-yellow-200 border-black border'
           onClick={copyPassword}
           >copy</button>
        </div>

        <div>
          <div>
            <input type="range"
              max={100}
              min={6}     
              value={length}   
              className='mx-2 cursor-pointer '   
              onChange={(e) => {setLength(e.target.value)}} 
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={() => {
                setNum((prev) => !prev)
              }}
            />
            <label> Numbers</label>

            <input type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App