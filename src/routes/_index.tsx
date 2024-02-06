import {Cloudinary} from "@cloudinary/url-gen"
import {scale} from "@cloudinary/url-gen/actions/resize"
import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | home",
    },
]

export const loader = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "bradgarropy",
        },
        url: {
            analytics: false,
        },
    })

    const djImageUrl = cld
        .image("cloudinary-optimize-demo/dj")
        .format("auto")
        .quality("auto")
        .resize(scale().width(1280))
        .toURL()

    return json({djImageUrl})
}

const IndexRoute = () => {
    const {djImageUrl} = useLoaderData<typeof loader>()

    return (
        <>
            <h2 className="text-2xl font-bold mb-8">Home</h2>

            <div className="mb-2 max-w-7xl">
                {/* STEP 1 | Image comes straight from Unsplash. */}
                {/* <img
                    src="https://images.unsplash.com/photo-1530649159659-c8beb2992433"
                    alt="dj"
                /> */}

                {/* STEP 2 | Image comes from Cloudinary. */}
                {/* <img
                    src="https://res.cloudinary.com/bradgarropy/image/upload/v1701465980/cloudinary-optimize-demo/dj.jpg"
                    alt="dj"
                /> */}

                {/* STEP 3 | Image comes from Cloudinary with optimizations. */}
                <img src={djImageUrl} alt="dj" />
            </div>

            <p className="text-center">
                Photo by{" "}
                <a href="https://unsplash.com/@johnfo">John Fornander</a> on{" "}
                <a href="https://unsplash.com/photos/man-holding-mixing-console-yvs7ZH3AZNM">
                    Unsplash
                </a>
            </p>
        </>
    )
}

export default IndexRoute
export {meta}
