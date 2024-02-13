import { Injectable } from '@angular/core';
import { LAPTOP_GAMING_IMAGES, LAPTOP_BUSINESS_IMAGES, LAPTOP_HOME_IMAGES, LAPTOP_ULTRA_IMAGES } from 'src/app/shared/data/product-images.data';
import { LAPTOP_GAMING_SUBCATEGORY, LAPTOP_BUSINESS_SUBCATEGORY, LAPTOP_ULTRA_SUBCATEGORY, LAPTOP_HOME_SUBCATEGORY } from 'src/app/shared/data/product-images.data';
import { LAPTOP_BAG_SUBCATEGORY, LAPTOP_CHARGER_SUBCATEGORY, LAPTOP_HARD_SUBCATEGORY, EXTERNAL_BATTERY_SUBCATEGORY, RAM_MEMORY_SUBCATEGORY } from 'src/app/shared/data/product-images.data';
import { PC_GAMING_SUBCATEGORY, ALL_IN_ONE_SUBCATEGORY, MONITOR_PRO_SUBCATEGORY } from 'src/app/shared/data/product-images.data';
import { LAPTOP_BAG_IMAGES, LAPTOP_CHARGER_IMAGES, LAPTOP_HARD_IMAGES, EXTERNAL_BATTERY_IMAGES, RAM_MEMORY_IMAGES } from 'src/app/shared/data/product-images.data';
import { PC_GAMING_IMAGES, ALL_IN_ONE_IMAGES } from 'src/app/shared/data/product-images.data';
import { MONITOR_PRO_IMAGES } from 'src/app/shared/data/product-images.data';
import { CATEGORY, CATEGORY_URL_KEY, TYPE, TYPE_URL_KEY } from '../enums/electro.enum';
import { BehaviorSubject, Observable } from 'rxjs';

class ChangeCategory {
  currentType: string = "";
  currentTypeUrlKey: string = "";
  currentCategUrlKey: string = "";
  selectedSubcategories: Array<string> = [];
  currentImages: any = "";
}

@Injectable({
  providedIn: 'root'
})
export class AdminHandleFormFiledService {

  currentCategory: string = "";
  private currentCategorySubject: BehaviorSubject<any> = new BehaviorSubject(this.currentCategory)

  changeCategory: ChangeCategory = new ChangeCategory();
  private changeCategorySubject: BehaviorSubject<ChangeCategory> = new BehaviorSubject(this.changeCategory)


  changeCurrentCategoryService(currentCategory: string) {
    this.currentCategory = currentCategory;
    this.currentCategorySubject.next(this.currentCategory);
    this.getImagesByCategoriesService();
  }

  getImagesByCategoriesService() {
    this.changeCategory = new ChangeCategory();
    switch (this.currentCategory) {
      case CATEGORY.LAPTOP_GAMING: {
        this.changeCategory.currentType = TYPE.LAPTOP;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.LAPTOP_GAMING_URL_KEY;
        this.changeCategory.selectedSubcategories = LAPTOP_GAMING_SUBCATEGORY;
        this.changeCategory.currentImages = LAPTOP_GAMING_IMAGES;
      };
        break;
      case CATEGORY.LAPTOP_BUSINESS: {
        this.changeCategory.currentType = TYPE.LAPTOP;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.LAPTOP_BUSINESS_URL_KEY;
        this.changeCategory.selectedSubcategories = LAPTOP_BUSINESS_SUBCATEGORY;
        this.changeCategory.currentImages = LAPTOP_BUSINESS_IMAGES;
      };
        break;
      case CATEGORY.LAPTOP_ULTRA: {
        this.changeCategory.currentType = TYPE.LAPTOP;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.LAPTOP_ULTRA_URL_KEY;
        this.changeCategory.selectedSubcategories = LAPTOP_ULTRA_SUBCATEGORY;
        this.changeCategory.currentImages = LAPTOP_ULTRA_IMAGES;
      };
        break;
      case CATEGORY.LAPTOP_HOME: {
        this.changeCategory.currentType = TYPE.LAPTOP;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.LAPTOP_HOME_URL_KEY;
        this.changeCategory.selectedSubcategories = LAPTOP_HOME_SUBCATEGORY;
        this.changeCategory.currentImages = LAPTOP_HOME_IMAGES;
      };
        break;
      case CATEGORY.LAPTOP_BAG: {
        this.changeCategory.currentType = TYPE.LAPTOP_ACCESSORY;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_ACCESSORY_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.LAPTOP_BAG_URL_KEY;
        this.changeCategory.selectedSubcategories = LAPTOP_BAG_SUBCATEGORY;
        this.changeCategory.currentImages = LAPTOP_BAG_IMAGES;
      };
        break;
      case CATEGORY.LAPTOP_CHARGER: {
        this.changeCategory.currentType = TYPE.LAPTOP_ACCESSORY;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_ACCESSORY_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.LAPTOP_CHARGER_URL_KEY;
        this.changeCategory.selectedSubcategories = LAPTOP_CHARGER_SUBCATEGORY;
        this.changeCategory.currentImages = LAPTOP_CHARGER_IMAGES;
      };
        break;
      case CATEGORY.LAPTOP_HARD: {
        this.changeCategory.currentType = TYPE.LAPTOP_ACCESSORY;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_ACCESSORY_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.LAPTOP_HARD_URL_KEY;
        this.changeCategory.selectedSubcategories = LAPTOP_HARD_SUBCATEGORY;
        this.changeCategory.currentImages = LAPTOP_HARD_IMAGES;
      };
        break;
      case CATEGORY.EXTERNAL_BATTERY: {
        this.changeCategory.currentType = TYPE.LAPTOP_ACCESSORY;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_ACCESSORY_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.EXTERNAL_BATTERY_URL_KEY;
        this.changeCategory.selectedSubcategories = EXTERNAL_BATTERY_SUBCATEGORY;
        this.changeCategory.currentImages = EXTERNAL_BATTERY_IMAGES;
      };
        break;
      case CATEGORY.RAM_MEMORY: {
        this.changeCategory.currentType = TYPE.LAPTOP_ACCESSORY;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.LAPTOP_ACCESSORY_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.RAM_MEMORY_URL_KEY;
        this.changeCategory.selectedSubcategories = RAM_MEMORY_SUBCATEGORY;
        this.changeCategory.currentImages = RAM_MEMORY_IMAGES;
      };
        break;
      case CATEGORY.PC_GAMING: {
        this.changeCategory.currentType = TYPE.PC;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.PC_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.PC_GAMING_URL_KEY;
        this.changeCategory.selectedSubcategories = PC_GAMING_SUBCATEGORY;
        this.changeCategory.currentImages = PC_GAMING_IMAGES;
      };
        break;
      case CATEGORY.ALL_IN_ONE: {
        this.changeCategory.currentType = TYPE.PC;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.PC_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.ALL_IN_ONE_URL_KEY;
        this.changeCategory.selectedSubcategories = ALL_IN_ONE_SUBCATEGORY;
        this.changeCategory.currentImages = ALL_IN_ONE_IMAGES;
      };
        break;
      case CATEGORY.MONITOR_PRO: {
        this.changeCategory.currentType = TYPE.MONITOR;
        this.changeCategory.currentTypeUrlKey = TYPE_URL_KEY.MONITOR_URL_KEY;
        this.changeCategory.currentCategUrlKey = CATEGORY_URL_KEY.MONITOR_PRO_URL_KEY;
        this.changeCategory.selectedSubcategories = MONITOR_PRO_SUBCATEGORY;
        this.changeCategory.currentImages = MONITOR_PRO_IMAGES;
      };
        break;
    }
    this.changeCategorySubject.next(this.changeCategory);
  }

  getChangeCategoryObservable(): Observable<any> {
    return this.changeCategorySubject.asObservable();
  }
}
