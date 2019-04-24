import * as React from "react"

interface WelcomeProps {
    name: string;
}

const Welcome = (props: any) => {
    return <h1>Hello, {props.namer}</h1>;
}

export default Welcome;