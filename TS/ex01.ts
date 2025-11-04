let a: number = 10;
a = "hom nay";
console.log(a);

let b: string = "Hoang";
console.log(b);

let isMarried: boolean = true;

// typescript notation

type User = { name: string; age: number; major: string };

{
  const infor: User = {
    name: "Nguyen Hoang",
    age: 33,
    major: "IT",
  };

  const infor2: User = {
    name: "Nguyen Phong",
    age: 22,
    major: "Marketing Content",
  };

  const listUser: User[] = [infor, infor2];
  const arrNumber: number[] = [1, 2, 3, 4, 5];
  const arrMixed: (number | string)[] = [1, 2, "Hoang", 4, "CodeFarm"];
  console.log(arrMixed);
  // tuple
}
