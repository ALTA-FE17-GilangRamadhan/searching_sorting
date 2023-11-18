function binarySearch(arr: object[] | any, x: number): boolean | number | object[] {
  let start: number = 0,
    end: number = arr.length - 1,
    target: number = arr.length,
    newArr: number[] = [];

  for (let val of arr) {
    let cetak = val.id == x;
    if (cetak) {
      target = arr.indexOf(val);
    }
    newArr.push(arr.indexOf(val));
  }

  while (start <= end) {
    let mid: number = Math.floor((start + end) / 2);
    if (newArr[mid] === newArr[target]) return arr[mid];
    else if (newArr[mid] < newArr[target]) start = mid + 1;
    else end = mid - 1;
  }

  return false;
}

const dataKaryawan = [
  { id: 101, nama: "Rani" },
  { id: 203, nama: "Andi" },
  { id: 305, nama: "Budi" },
  { id: 401, nama: "Cindy" },
  { id: 520, nama: "Dodi" },
  { id: 635, nama: "Eka" },
  { id: 742, nama: "Fani" },
];
const targetId = 305;
console.log(binarySearch(dataKaryawan, targetId));
console.log(binarySearch(dataKaryawan, 401));
console.log(binarySearch(dataKaryawan, 742));
console.log(binarySearch(dataKaryawan, 521));
