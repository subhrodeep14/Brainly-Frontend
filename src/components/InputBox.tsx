
interface InputBoxVar{
    placeholder:string,
    onChange:()=>void
} 

const InputBox = ({
    placeholder,onChange
}:InputBoxVar) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} className="px-5 py-2 border rounded mt-3" onChange={onChange}/>
    </div>
  )
}

export default InputBox
