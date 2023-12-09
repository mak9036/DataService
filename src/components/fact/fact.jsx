import Style from "./fact.module.css"

function fact(props) {

    return (
        <>
            <section className={Style.fact}>
                <h2> {props.headline}</h2>
                <p> {props.content}</p>
            </section>
        </>
    )
}

export default fact