import { ReactNode } from "react";
import styles from '../page.module.css'

interface DashboardProps{
    children: ReactNode,
    title: string
}

export default function DashboardLayout({ children, title }: DashboardProps) {
    return (
        <section className={styles.wrapper}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}