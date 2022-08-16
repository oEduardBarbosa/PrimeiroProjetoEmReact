import styles from './Post.module.css';


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}> 
                    <img className={styles.avatar} src="https://github.com/oEduardBarbosa.png" />
                    <div className={styles.authorInfo} >
                        <strong>Eduard Barbosa</strong>
                        <span>Web Developer</span>
                    </div>    
                </div>

                <time title="Publicado 11 de maio as 21:00" dateTime="2022-05-11 21:00:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}> 
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">eduard.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw </a> {' '}
                    <a href="">#rocketseat</a> 
                </p>
                
            </div>
        </article>
    )

}