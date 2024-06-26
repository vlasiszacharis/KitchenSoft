//Suppliers
export interface Supplier {
  id: number;
  supplier_name: string;
  supplier_email: string;
  supplier_afm: string;
  supplier_webpage: string;
}

//Stock Items
export interface StockItem {
  item_supplier_name: string;
  item_supplier_code: string;
  item_name: string;
  item_measurement_unit: string;
  item_category: string;
  item_quantity: any;
}
export interface DeleteStockItemProps {
  item_supplier_name: string;
  item_supplier_code: string;
}

export interface EditStockProps {
  setToggleEdit: Function;
  supplierName: string;
  supplierCode: string;
}

export interface AddStockItemProps {
  setToggleItem: Function;
}

export interface EditStockItemProps extends StockItem {
  setToggleEdit: Function;
}
export interface SimpleIngredientModel {
  quantity: number;
  food_cost: number;
  title: string;
  supplier_code: string;
  measurement_unit: string;
  type: "ingredient";
}

//Sub Recipes
export interface SubRecipeModel {
  quantity: number;
  food_cost: number;
  sub_recipe_id: string;
  type: "sub-recipe";
}

export type PricedIngredientModel = SimpleIngredientModel | SubRecipeModel;

export interface PricedSubRecipeModel {
  priced_sub_recipe_id: number;
  priced_sub_recipe_title: string;
  priced_sub_recipe_description: string;
  priced_sub_recipe_ingredients: PricedIngredientModel[];
  priced_sub_recipe_quantity: number;
  priced_sub_recipe_food_cost: number;
  priced_sub_recipe_pricePerUnit: number;
}
export interface PricedSubRecipeModelUnique {
  priced_sub_recipe_id: number;
  priced_sub_recipe_title: string;
  priced_sub_recipe_description: string;
  priced_sub_recipe_ingredients: PricedIngredientModel[];
  priced_sub_recipe_quantity: number;
  priced_sub_recipe_food_cost: number;
}
export interface PricedSubRecipeModelID extends PricedSubRecipeModel {
  id: string;
}
export interface PricedSubRecipePost {
  quantity: number;
  type: string;
  sub_recipe_id: number;
}

export interface AddItemPros {
  setToggleItem: Function;
}

export interface EditItemPros extends StockItem {
  setToggleEdit: Function;
}

//Recipes
export interface RecipeModelUnique {
  recipe_id: number;
  recipe_title: string;
  recipe_description: string;
  recipe_ingredients: PricedIngredientModel[];
  recipe_quantity: number;
  recipe_food_cost: number;
  enabled: boolean;
}
export interface RecipeModel {
  recipe_id: number;
  recipe_title: string;
  recipe_description: string;
  recipe_ingredients: PricedIngredientModel[];
  recipe_quantity: number;
  recipe_food_cost: number;
  enabled: boolean;
  recipe_pricePerUnit: number;
}
