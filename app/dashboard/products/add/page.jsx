import style from '@/app/ui/products/addProduct/addProduct.module.css'

export default function AddProductPage() {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <input type="text" name='title' placeholder='title' required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" id="price" placeholder='price' />
        <input type="number" name="stock" id="stock" placeholder='stock' />
        <input type="text" name="color" id="color" placeholder='color' />
        <input type="text" name="size" id="size" placeholder='size' />
        <textarea name="desc" id="desc" placeholder='Desciprion' cols="30" rows="10"></textarea>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}