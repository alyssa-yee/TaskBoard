import Head from 'next/head'
import Layout from "./layout/layout.js"
import Link from "next/link"

export default function CreateGroup() {
    return(
        <Layout>
            <Head>
                <title>Collaborate</title>
            </Head>

                <div className="collaborate--items">
                    <div id="coll-title">CREATE A TASK GROUP!</div>
                    <div className="form-items">
                        <div className="add-collaborators">
                            <form>
                            <label for="fname">Group Name </label>
                            <input type="text" id="fname" name="fname"></input>
                                <label for="fname">Collaborators </label>
                                <input type="submit" value="+" className="add-item"></input>
                                <input type="text" id="fname" name="fname"></input>
                                <div></div>
                                <input type="submit" value="Submit" className="add-item"></input>
                            </form>
                        </div>
                    </div>
                    <Link href="/GroupCreateJoin">
                        <span id="text-only">GO BACK</span>
                    </Link>
                </div>
        </Layout>
    )
}