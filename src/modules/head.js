import React from "react"
import "../index.css"

class Head extends React.Component
{
    render()
    {
        return (
            <div className="h-1/6 w-screen bg-gray-600 flex items-center">
                <p className="text-white text-3xl text-center w-full">Time Line</p>
            </div>
        )
    }
}

export { Head }