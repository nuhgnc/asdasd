

const handleForm = async (formData) => {
    "use server"
    const {name} = Object.fromEntries(formData) 
    console.log(name)
}


export default function Test() {

  
    return (
    <div>
        <form action={handleForm} >
            <input type="text" name="name" id="" />
            <button>Send</button>
        </form>
    </div>
  )
}