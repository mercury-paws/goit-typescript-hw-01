// type AllType = {
//       name: string;
//       position: number;
//       color: string;
//       weight: number
//     }

//     function compare (top, bottom): AllType {
//       return {
//         name: top.name,
//         color: top.color,
//         position: bottom.position,
//         weight: bottom.weight,
//       }
//     }

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(
  top: T,
  bottom: U
): Pick<AllType, "name" | "color" | "position" | "weight"> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
