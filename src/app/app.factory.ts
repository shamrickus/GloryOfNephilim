export const nameofFactory = <T>() => (name: keyof T) => name;

export function Duplicate(arr: any[]): any[] {
    let i = arr.length;
    let newArr = new Array(i);
    while(i--) { newArr[i] = arr[i]; }
    return newArr;
}