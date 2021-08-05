import React, { useState } from "react";
import s from "./Paginator.module.css"



type PaginaotorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize: number
    onPageChanged: (p: number, pageSize: number) => void

}

export const Paginator: React.FC<PaginaotorPropsType> = ({ totalItemsCount, pageSize, currentPage, portionSize, onPageChanged }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    return (
        <div>
            {
                portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span
                            key={p}
                            className={currentPage === p ? s.selected : ""}
                            onClick={() => onPageChanged(p, pageSize)}>
                            {p}
                        </span>
                    })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
            {/* {pages.map((p, index) => {
                return <span key={index} onClick={() => onPageChanged(p, pageSize)} className={currentPage === p ? s.selected : ""} > {p}</span>
            })} */}
        </div>
    )
}