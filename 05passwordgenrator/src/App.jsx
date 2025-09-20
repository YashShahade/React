import { useState , useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()_+"
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1 )  
      pass += str.charAt(char)
    }
    setPassword(pass)   
  }, [length, numberAllowed, characterAllowed])

  const copyPasswordToClickbord = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }


  useEffect(() => {
    generatePassword()
  },[length, numberAllowed, characterAllowed])

  return (
    <div className='w-full max-w-mg-auto shadow-md 
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className=' text-white text-center my-3'>Password Genrator </h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClickbord}
        className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        <div
        className='flex text-sm gap-x-2'
        >
          <div className='flex items-center gap-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
              />
              <label htmlFor="length">Length:{length}</label>

          </div>
          <div className='flex items-center gap-1'>
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
              }}
              name=""
              id=""/>
              <label htmlFor="number">Number</label>
          </div>
          <div className='flex items-center gap-1'>
            <input
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev)
              }}
              name=""
              id=""/>
              <label htmlFor="charInput">Character</label>
          </div>
        </div>
    </div>
    </div>
  )
}

export default App
