import React, { useState } from "react";

interface LinkedListProp {
    children?: React.ReactNode
}

export const LinkedList = ({ children }: LinkedListProp) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}