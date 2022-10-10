import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query} = useRouter()

    return (
        <MainContainer pageTitle={user.name}>
            <div>{`User ${user.name} with id ${query.id}`}</div>
        </MainContainer>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}