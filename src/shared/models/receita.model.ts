import { ItemModel } from "./item.model";

export class ReceitaModel {
  titulo!: string;
  categoria!: string;
  foto!: string;
  ingredientes!: ItemModel[];
  preparo!: ItemModel[];
}
