import { ItemModel } from "./item.model";

export class ReceitaModel {
  id!: number;
  titulo!: string;
  categoria!: string;
  foto!: string;
  ingredientes!: ItemModel[];
  preparo!: ItemModel[];
}
