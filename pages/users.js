import React from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer pageTitle={'Users'}>
            <ul>
                {users.map(user => <li key={user.id}>
                    <Link href={`users/${user.id}`}>
                        <a>{user.name}</a>
                    </Link>
                </li>)}
            </ul>
        </MainContainer>
    );
};

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}

export default Users;
