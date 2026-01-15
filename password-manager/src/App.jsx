import { useState, useCallback , useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(5)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")
  const [strength, setStrength] = useState("WEAK")
  const [col, setCol] = useState('white')

  //ref
  const passwordRef = useRef(null);

  const gen = useCallback(() => {
    let p="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let marks=0;

    if(num) str+= "0123456789"
    if(char) str+= "!@#$%^&*()[]{}<>"
    if(length>8) marks+=3

    for(let i=0;i<length;i++){
      let ch = Math.floor(Math.random()* str.length +1)
      p += str.charAt(ch)
    }

    if(/[a-z]/.test(p)) marks+=2
    if(/[A-Z]/.test(p)) marks+=2
    if(/[0-9]/.test(p)) marks+=2
    if(/[^A-Za-z0-9]/.test(p)) marks+=2

    if(marks<5) {
      setStrength("WEAK")
      setCol('red')
    }else if(marks>4 && marks<8) {
      setStrength("MEDIUM")
      setCol('yellow')
    }else {
      setStrength("STRONG")
      setCol('green')
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
           <button className='text-black font-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-lg'
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

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-black bg-white"
      style={{backgroundColor: col}}>
        <p className='text-center font-semibold'>STRENTH: {strength}</p>
      </div>
    </>
  )
}

export default App