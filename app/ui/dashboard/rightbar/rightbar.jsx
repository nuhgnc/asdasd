import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}> Available Now </span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            commodi. Eos autem cum explicabo nesciunt nisi, culpa architecto
            dignissimos modi doloribus asperiores maiores blanditiis fugit?
          </p>
          <button className={styles.button} >
            <MdPlayCircleFilled />
            Watc
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}> Available Now </span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            commodi. Eos autem cum explicabo nesciunt nisi, culpa architecto
            dignissimos modi doloribus asperiores maiores blanditiis fugit?
          </p>
          <button className={styles.button} >
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
