import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';

export function LoginBox() {
  return (
    <div className={styles.loginBoxWraper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="#" className={styles.signInGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  );
}
