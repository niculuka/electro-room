import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { SPECIFICATION, Specification } from 'src/app/shared/data/specification.data';
import { SPECIFICATIONS } from 'src/app/shared/enums/electro.enum';
import { CategorySpecification, Product } from 'src/app/shared/models/product.model';
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

  categSpec: CategorySpecification = new CategorySpecification();
  specifications: Array<Specification> = SPECIFICATION;

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

  handleWidth() {
    if (this.compares.length === 1) this.trWidth = 'width: 40%';
    if (this.compares.length === 2) this.trWidth = 'width: 60%';
    if (this.compares.length === 3) this.trWidth = 'width: 80%';
    if (this.compares.length === 4) this.trWidth = 'width: 100%';
  }

  emptySpecification() {
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.categSpec.display_size.push(ps.display_size);
        this.categSpec.display_frequency.push(ps.display_frequency);
        this.categSpec.display_touch.push(ps.display_touch);

        this.categSpec.motherboard_brand.push(ps.motherboard_brand);
        this.categSpec.motherboard_chipset.push(ps.motherboard_chipset);
        this.categSpec.motherboard_slot.push(ps.motherboard_slot);
        this.categSpec.motherboard_audio.push(ps.motherboard_audio);

        this.categSpec.processor_brand.push(ps.processor_brand);
        this.categSpec.processor_type.push(ps.processor_type);
        this.categSpec.processor_model.push(ps.processor_model);
        this.categSpec.processor_frequency.push(ps.processor_frequency);

        this.categSpec.memory_type.push(ps.memory_type);
        this.categSpec.memory_capacity.push(ps.memory_capacity);
        this.categSpec.memory_frequency.push(ps.memory_frequency);

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
