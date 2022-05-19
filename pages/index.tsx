import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <span className="bg-blue-600">adwadw</span>
      Home!
      <a href="/write">
        빨강
      </a>
      <style jsx>{`
        a { background-color:tomato; }
      `}</style>
    </div>
  )
}
