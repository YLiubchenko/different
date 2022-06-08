import React from 'react';

export function Btns({pageSize, setPageSize, questionDataLength, finishExam}) {
    return (
        <div>
            {pageSize > 0 && <button onClick={() => setPageSize(pageSize - 1)}>previous</button>}

            {
                pageSize < (questionDataLength - 1) &&
                <button onClick={() => setPageSize(pageSize + 1)}>next</button>
            }
            {
                pageSize === (questionDataLength - 1) &&
                <button onClick={finishExam}>Pass exam</button>
            }
        </div>
    )
}