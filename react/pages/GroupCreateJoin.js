import Head from 'next/head'
import Layout from "./layout/layout.js"
import Link from "next/link"

export default function Collaborate() {
    return(
        <Layout>
            <Head>
                <title>Group Task Board</title>
            </Head>

                <div className="group--items">
                    <div id="text-only">Create a group or view your task board!</div>
                    <div className="group-selection">
                        <Link href="/CreateGroup" id="cj-group"> Create Group </Link>
                        <Link href="/Task-Page/tasks" id="cj-group"> Task Board </Link>
                    </div>
                </div>
        </Layout>
    )
}