export const M_WIDTH = 2600;
export const M_HEIGHT = 1
export const idr = Math.floor(Math.random() * Math.floor(99999));


export const createMapField = () =>  Array.from(Array(M_HEIGHT) , () =>  
    new Array(M_WIDTH).fill([0, 'n', idr])
    )
 


export const createMiddle = () =>  Array.from(Array(M_HEIGHT) , () =>  
    new Array(M_WIDTH).fill([1, 'm', idr])
    )
 
export const createSouth = () =>  Array.from(Array(M_HEIGHT) , () =>  
    new Array(M_WIDTH).fill([0, 's', idr])
    )
 
