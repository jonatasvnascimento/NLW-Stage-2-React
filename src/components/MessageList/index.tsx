import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p>Teste</p>
        </li>
      </ul>
    </div>
  );
}
