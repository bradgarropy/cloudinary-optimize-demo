import {Cloudinary} from "@cloudinary/url-gen"
import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | home",
    },
]

const IndexRoute = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "bradgarropy",
        },
    })

    const djImageUrl = cld
        .image("cloudinary-demo/dj")
        .format("auto")
        .quality("auto")
        .toURL()

    return (
        <>
            <h2 className="text-2xl font-bold mb-8">Home</h2>

            <img
                className="mb-2"
                src="https://images.unsplash.com/photo-1619597361832-a568b1e0555f"
                alt="dj"
            />

            <img
                className="mb-2"
                src="https://res.cloudinary.com/bradgarropy/image/upload/v1701465980/cloudinary-demo/dj.jpg"
                alt="dj"
            />

            <img className="mb-2" src={djImageUrl} alt="dj" />

            <p className="text-center">
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
