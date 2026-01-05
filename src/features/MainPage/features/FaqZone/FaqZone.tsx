import styles from '../../styles/faqZone.module.css'
import Accordion from './components/Accordion/Accordion'


const FaqZone = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>
				Часто задаваемые <span>вопросы</span>
			</h2>
			<Accordion/>			
		</section>
	)
}

export default FaqZone
