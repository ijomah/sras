export const sortItemDec = (arr: object[]) => {
    if(arr.every(obj => 'ave' in obj)){
        arr.sort((a: any, b: any) =>  b.ave - a.ave)
    } else {
        console.error("Not possible to sort this array because some objects lack 'ave' key")
    }
}

export const sortItemInc = (arr: object[]) => {
    if(arr.every(obj => 'ave' in obj)){
        arr.sort((a: any, b: any) =>  a.ave - b.ave)
    } else {
        console.error("Not possible to sort this array because some objects lack 'ave' key")
    }
}