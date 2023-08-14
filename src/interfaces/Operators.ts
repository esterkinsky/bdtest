import { mtclogo, megafonlogo, beelinelogo } from "../assets";

export interface IOperator {
  id: number | string;
  name: string;
  image?: string;
}

export const operators: IOperator[] = [
  {
    id: 0,
    name: "MTC",
    image: mtclogo,
  },
  {
    id: 1,
    name: "MegaFon",
    image: megafonlogo,
  },
  {
    id: 2,
    name: "Beeline",
    image: beelinelogo,
  },
];
