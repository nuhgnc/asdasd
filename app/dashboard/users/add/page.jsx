import { addUser } from "@/app/lib/actions";
import style from "@/app/ui/users/addUser/addUser.module.css";

export default function AddUserPage() {
  return (
    <div className={style.container}>
      <form action={addUser} className={style.form}>
        <input type="text" name="username" placeholder="username"  required />
        <input type="text" name="email" placeholder="email" required />
        <input type="text" name="password" placeholder="password" required />
        <input type="text" name="phone" placeholder="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="addres"
          id="addres"
          placeholder="Adress"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
