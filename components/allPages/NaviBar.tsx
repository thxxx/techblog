import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from './NaviBar.module.css'

function NaviBar() {
    const router = useRouter();
    // 라우터로, location에 관한 모든 정보를 얻을 수 있다.

    return (
        <div className={style.container}>
            <img src="/vercel.svg" />
            네비 바
            <Link href="/">
                <a className={style.nav_button}>홈 화면</a>
            </Link>
            <span className={style.nav_button} onClick={() => router.push(`/write`)}>작성화면</span>
        </div>
    )
}

export default NaviBar
