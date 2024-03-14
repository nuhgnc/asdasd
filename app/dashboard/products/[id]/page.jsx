import style from '@/app/ui/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'
export default function
 SingleProductPage() {
  return (
    <div className={style.container}>
        <div className={style.infoContainer}>
            <div className={style.imgContainer}>
                <Image src='/noproduct.jpg' fill />
            </div>
            Nuh Genç
        </div>
        <div className={style.formContainer}>
            <form action="" className={style.form} >
            <label >Title</label>
            <input type="text" name='title' placeholder='Iphone 11' />
            <label >Description</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
            <label >Prive</label>
            <input type="text" name='price' placeholder='1300' />
            <label >Created At</label>
            <input type="text" name='createdAt' placeholder='03.03.2024' />
            <label >Stock</label>
            <textarea type="number" name='stock' placeholder='325' />
            <label>Category</label>
            <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
            <button>Update</button>
            </form>
        </div>
    </div>
  )
}