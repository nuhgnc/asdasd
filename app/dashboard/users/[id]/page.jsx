import style from '@/app/ui/users/singleUser/singleUser.module.css'
import Image from 'next/image'
export default function
 SingleUserPage() {
  return (
    <div className={style.container}>
        <div className={style.infoContainer}>
            <div className={style.imgContainer}>
                <Image src='/noavatar.png' fill />
            </div>
            Nuh Genç
        </div>
        <div className={style.formContainer}>
            <form action="" className={style.form} >
            <label >Username</label>
            <input type="text" name='username' placeholder='Nuh Genç' />
            <label >E-mail</label>
            <input type="email" name='email' placeholder='nuhgnc1mail.com' />
            <label >Password</label>
            <input type="password" name='password' placeholder='123123123' />
            <label >Phone</label>
            <input type="text" name='phone' placeholder='5314900136' />
            <label >Adress</label>
            <textarea type="text" name='adress' placeholder='adasdadj ajkdbabd adhavdvaudvaudvıabdıabdad asdadad' />
            <label >Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label >Is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button>Update</button>
            </form>
        </div>
    </div>
  )
}