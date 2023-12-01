import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | home",
    },
]

const IndexRoute = () => {
    return (
        <>
            <h2 className="text-2xl font-bold">Home</h2>

            <img src="dj.jpg" alt="dj" />

            <p>
                Photo by{" "}
                <a href="https://unsplash.com/@deni_eliash?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                    Daniel Eliashevskyi
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/photos/black-dj-controller-turned-on-in-dim-light-room-T3Neg57nlYs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                    Unsplash
                </a>
            </p>
        </>
    )
}

export default IndexRoute
export {meta}
