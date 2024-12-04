
interface InputBoxVar{
    placeholder:string,
    reference?:any
} 

const InputBox = ({
    placeholder,reference
}:InputBoxVar) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} ref={reference} className="px-5 py-2 border rounded mt-3 w-full " />
    </div>
  )
}

export default InputBox
