import React from "react";
import s from "./Paginator.module.css"



type PaginaotorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number, pageSize: number) => void
}

export const Paginator: React.FC<PaginaotorPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <div>
            {pages.map((p, index) => {
                return <span key={index} onClick={() => onPageChanged(p, pageSize)} className={currentPage === p ? s.selected : ""} > {p}</span>
            })}
        </div>
    )
}