import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2>MyHeader</h2>
      <nav>
        <a href="">home</a>
        <a href="">sobre</a>
        <a href="">contato</a>
        <button>fale agora</button>
      </nav>
    </header>
  );
}