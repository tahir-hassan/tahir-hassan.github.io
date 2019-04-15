import * as React from "react";

interface IHelloProps {
    message: string
}

export default class Hello extends React.Component<IHelloProps> {
    render() {
        return (
            <p>{this.props.message}</p>
        );
    }
}