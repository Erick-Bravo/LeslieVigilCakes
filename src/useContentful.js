import {createClient} from "contentful";

const useContentful = () => {
    const client = createClient({
        space: process.env.SPACEID,
        accessToken: process.env.ACCESSTOKEN
    })

    const getTitle = async () => {
        try {
            client.getTitle({
                content_type: "",
                select: ""
            })
        } catch {

        }
    }
}

export default useContentful