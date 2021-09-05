import React from "react"
import "../index.css"

class Left extends React.Component
{
    render()
    {
        return (<div className="w-full h-auto flex md:justify-end transform md:rotate-180 md:pr-9">
            <div className="flex flex-row w-full md:w-1/2">
                {/* circle */}
                <div className="w-auto m-2 flex items-center bg-red-200">
                    <div className="rounded-full h-5 w-5 border-2 border-gray-300 bg-red-500"></div>
                </div>
                {/* Cube */}
                <div className="w-auto h-auto p-2">
                    <div className="w-full md:w-auto h-auto items-center border-2 border-gray-200 rounded-xl flex flex-row">
                        <div className="items-center">
                            <div className="w-4 h-4 origin-center bg-white transform rotate-45 border-l-2 border-b-2 border-gray-200 -ml-2"></div>
                        </div>
                        <div className="w-full md:w-auto h-auto flex flex-col pl-1 md:pl-3 pt-2 pr-2 md:pr-1 pb-2 transform md:rotate-180 md:max-w-2xl">
                            <h1>aaaaa</h1>
                            <h2>12544</h2>
                            <h3>2021年9月3日我们不得不面对一个非常尴尬的事实, 那就是, 随机一段废话因何而发生?随机一段废话, 到底应该如何实现. 就我个人来说, 随机一段废话对我的意义, 不能不说非常重大. 吕凯特在不经意间这样说过, 生命不可能有两次，但许多人连一次也不善于度过。我希望诸位也能好好地体会这句话. 既然如何, 生活中, 若随机一段废话出现了, 我们就不得不考虑它出现了的事实</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export { Left }
