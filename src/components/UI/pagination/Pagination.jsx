import React from 'react';
import {getPagesArray} from "../../../utils/page";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="page_wrapper">
            {pagesArray.map(p =>
                <span
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                    onClick={() => changePage(p)}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;