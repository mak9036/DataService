import style from "./page.module.css"
import Fact from "../../components/fact/fact.jsx"

function Page() {
    return (
        <>
            <main className={style.main}>
                <h1>Random</h1>
                <article>
                    <Fact headline="Minecraft" content="Is shit"></Fact>
                    <Fact headline="Lethal Company" content="Is shit"></Fact>
                    <Fact headline="Valorant" content="Is shit"></Fact>
                    <Fact headline="World of Warcraft" content="Is shit"></Fact>
                </article>
            </main>
        </>
    );
}

export default Page;