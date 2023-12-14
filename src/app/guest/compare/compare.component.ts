import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Product, ProductSpecification, SpecificationTitle } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {

  compares!: Array<Product>;
  trWidth: string = 'width: 100%';

  title: SpecificationTitle = new SpecificationTitle();
  specifications: Array<ProductSpecification> = [];
  specification: ProductSpecification = new ProductSpecification();
  specification0: ProductSpecification = new ProductSpecification();
  specification1: ProductSpecification = new ProductSpecification();
  specification2: ProductSpecification = new ProductSpecification();
  specification3: ProductSpecification = new ProductSpecification();

  private sub: any;

  constructor(
    private cartService: CartService,
    private compareService: CompareService,
    private location: Location,
  ) {
    this.sub = compareService.getComparesObservable().subscribe(comp => {
      this.compares = comp;
      this.handleWidth();
      this.emptySpecification();
    });
  }

  checkWidth() {
    if (this.compares.length === 1) this.trWidth = 'width: 40%';
    if (this.compares.length === 2) this.trWidth = 'width: 60%';
    if (this.compares.length === 3) this.trWidth = 'width: 80%';
    if (this.compares.length === 4) this.trWidth = 'width: 100%';
  }

  emptySpecification() {
    this.specifications = [];
    for (let product of this.compares) {
      this.specifications = this.specifications.concat(product.specifications);
    }
    this.specification = new ProductSpecification();
    this.specifications.find(item => {
      if (item.display_size) this.specification.display_size = item.display_size;
      if (item.display_frequency) this.specification.display_frequency = item.display_frequency;
      if (item.display_touch) this.specification.display_touch = item.display_touch;

      if (item.motherboard_brand) this.specification.motherboard_brand = item.motherboard_brand;
      if (item.motherboard_chipset) this.specification.motherboard_chipset = item.motherboard_chipset;
      if (item.motherboard_slot) this.specification.motherboard_slot = item.motherboard_slot;
      if (item.motherboard_audio) this.specification.motherboard_audio = item.motherboard_audio;

      if (item.processor_brand) this.specification.processor_brand = item.processor_brand;
      if (item.processor_type) this.specification.processor_type = item.processor_type;
      if (item.processor_model) this.specification.processor_model = item.processor_model;
      if (item.processor_frequency) this.specification.processor_frequency = item.processor_frequency;

      if (item.memory_type) this.specification.memory_type = item.memory_type;
      if (item.memory_capacity) this.specification.memory_capacity = item.memory_capacity;
      if (item.memory_frequency) this.specification.memory_frequency = item.memory_frequency;

      }
      // console.log(this.categSpec);
    }

    for (let specification of this.specifications) {
      for (let sub of specification.subtitles) {
        if (sub.subtitle == SPECIFICATIONS.DISPLAY_DIAGONAL) {
          sub.specifications = this.categSpec.display_size;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.DISPLAY_FREQUENCY) {
          sub.specifications = this.categSpec.display_frequency;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.DISPLAY_TOUCH) {
          sub.specifications = this.categSpec.display_touch;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }

        if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_BRAND) {
          sub.specifications = this.categSpec.motherboard_brand;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_CHIPSET) {
          sub.specifications = this.categSpec.motherboard_chipset;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_SLOT) {
          sub.specifications = this.categSpec.motherboard_slot;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_AUDIO) {
          sub.specifications = this.categSpec.motherboard_audio;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }

        if (sub.subtitle == SPECIFICATIONS.PROCESSOR_BRAND) {
          sub.specifications = this.categSpec.processor_brand;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.PROCESSOR_TYPE) {
          sub.specifications = this.categSpec.processor_type;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.PROCESSOR_MODEL) {
          sub.specifications = this.categSpec.processor_model;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.PROCESSOR_FREQUENCY) {
          sub.specifications = this.categSpec.processor_frequency;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }

        if (sub.subtitle == SPECIFICATIONS.MEMORY_TYPE) {
          sub.specifications = this.categSpec.memory_type;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.MEMORY_CAPACITY) {
          sub.specifications = this.categSpec.memory_capacity;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
        if (sub.subtitle == SPECIFICATIONS.MEMORY_FREQUENCY) {
          sub.specifications = this.categSpec.memory_frequency;
          sub.specifications.find((item: any) => { if (item) sub.subtitle_chk = true; })
        }
      }
    }

    for (let specification of this.specifications) {
      for (let sub of specification.subtitles) {
        if (specification.title === SPECIFICATIONS.TITLE_DISPLAY) {
          sub.specifications.find((item: any) => { if (item) specification.title_chk = true; });
        }
        if (specification.title === SPECIFICATIONS.TITLE_MOTHERBOARD) {
          sub.specifications.find((item: any) => { if (item) specification.title_chk = true; });
        }
        if (specification.title === SPECIFICATIONS.TITLE_PROCESSOR) {
          sub.specifications.find((item: any) => { if (item) specification.title_chk = true; });
        }
        if (specification.title === SPECIFICATIONS.TITLE_MEMORY) {
          sub.specifications.find((item: any) => { if (item) specification.title_chk = true; });
        }
      }
    }
    // console.log(specification);
    // console.log(this.categSpec.display_size);
    console.log(this.specifications);
    // console.log(this.categSpec.display_size);
    // }


  }

  addToCart(product: Product) {
    this.cartService.addToCartService(product);
  }

  removeFromCompare(product: Product) {
    this.compareService.removeFromComparesService(product);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
