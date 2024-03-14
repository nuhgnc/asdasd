import styles from'./footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container} >
        <div className={styles.logo}>Logo</div>
        <div className={styles.text}>Text</div>
    </div>
  )
}