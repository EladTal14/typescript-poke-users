import React from "react";

export const Filter: React.VFC<{ filter: string | number, onSetFilter: (newFilter: React.ChangeEvent<HTMLInputElement>) => void }> = ({
                                                                                                                                          filter,
                                                                                                                                          onSetFilter
                                                                                                                                      }) => {
    return (
        <div>
            <input type="text" value={filter} onChange={onSetFilter}/>
        </div>
    );
};

