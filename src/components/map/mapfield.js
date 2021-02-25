export const M_WIDTH = 3600;
export const M_HEIGHT = 1
export const idr = Math.floor(Math.random() * Math.floor(99999));

/// HAS NAME // HAS TYPE // IS NUMBER // OR IS EMPPTY
// LOAD DATA
// FILL ARRAY with type name and id / index. 
// If NO props Default [0, 'n', 0]
export const createMapField = () =>  Array.from(Array(M_HEIGHT) , () =>  
    new Array(M_WIDTH).fill([0, 'n', idr])
    )
 


 
export const createSouth = () =>  Array.from(Array(M_HEIGHT) , () =>  
    new Array(M_WIDTH).fill([2, 's', idr])
    )
 
