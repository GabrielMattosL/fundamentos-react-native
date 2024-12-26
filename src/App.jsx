import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './Post'

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author="Luiz"
            content="Lorem ipsum."
          />          
          <Post
            author="Gabriel"
            content="Lorem dolores."
          />
        </main>
      </div>
    </div>
  )
}