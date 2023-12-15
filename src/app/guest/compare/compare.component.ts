import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { SPECIFICATION, Specification } from 'src/app/shared/data/specification.data';
import { SPECIFICATIONS } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {

  compares!: Array<Product>;
  trWidth1: string = 'width: 100%';
  trWidth2: string = 'width: 100%';
  td1Row: string = 'width: 100%';
  td2Row: string = 'width: 100%';
  td1Col: string = 'width: 100%';
  td2Col: string = 'width: 100%';

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
    if (this.compares.length === 1) this.trWidth1 = 'width: 40%';
    if (this.compares.length === 1) this.trWidth2 = 'width: 25%';
    if (this.compares.length === 1) this.td1Row = 'width: 50%';
    if (this.compares.length === 1) this.td2Row = 'width: 50%';

    if (this.compares.length === 2) this.trWidth1 = 'width: 60%';
    if (this.compares.length === 2) this.trWidth2 = 'width: 50%';
    if (this.compares.length === 2) this.td1Row = 'width: 33.33%';
    if (this.compares.length === 2) this.td2Row = 'width: 66.66%';

    if (this.compares.length === 3) this.trWidth1 = 'width: 80%';
    if (this.compares.length === 3) this.trWidth2 = 'width: 75%';
    if (this.compares.length === 3) this.td1Row = 'width: 25%';
    if (this.compares.length === 3) this.td2Row = 'width: 75%';

    if (this.compares.length === 4) this.trWidth1 = 'width: 100%';
    if (this.compares.length === 4) this.trWidth2 = 'width: 100%';
    if (this.compares.length === 4) this.td1Row = 'width: 20%';
    if (this.compares.length === 4) this.td2Row = 'width: 80%';
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

  emptySpecification() {
    for (let specification of this.specifications) {
      specification.title_chk = false;

      for (let sub of specification.subtitles) {
        sub.subtitle_chk = false;
        sub.specifications = [];

        for (let product of this.compares) {
          for (let ps of product.specifications) {

            // D I S P L A Y -------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.DISPLAY_DIAGONAL) {
              sub.specifications.push(ps.display_size);
              if (ps.display_size) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.RESOLUTION) {
              sub.specifications.push(ps.display_resolution);
              if (ps.display_resolution) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.DISPLAY_FREQUENCY) {
              sub.specifications.push(ps.display_frequency);
              if (ps.display_frequency) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.DISPLAY_TOUCH) {
              sub.specifications.push(ps.display_touch);
              if (ps.display_touch) sub.subtitle_chk = true;
            }

            // M O T H E R B O A R D -----------------------------------------
            if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_BRAND) {
              sub.specifications.push(ps.motherboard_brand);
              if (ps.motherboard_brand) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_CHIPSET) {
              sub.specifications.push(ps.motherboard_chipset);
              if (ps.motherboard_chipset) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_SLOT) {
              sub.specifications.push(ps.motherboard_slot);
              if (ps.motherboard_slot) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_AUDIO) {
              sub.specifications.push(ps.motherboard_audio);
              if (ps.motherboard_audio) sub.subtitle_chk = true;
            }

            // P R O C E S S O R ---------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.PROCESSOR_BRAND) {
              sub.specifications.push(ps.processor_brand);
              if (ps.processor_brand) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.PROCESSOR_TYPE) {
              sub.specifications.push(ps.processor_type);
              if (ps.processor_type) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.PROCESSOR_MODEL) {
              sub.specifications.push(ps.processor_model);
              if (ps.processor_model) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.PROCESSOR_FREQUENCY) {
              sub.specifications.push(ps.processor_frequency);
              if (ps.processor_frequency) sub.subtitle_chk = true;
            }

            // M E M O R Y -------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.MEMORY_TYPE) {
              sub.specifications.push(ps.memory_type);
              if (ps.memory_type) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.MEMORY_CAPACITY) {
              sub.specifications.push(ps.memory_capacity);
              if (ps.memory_capacity) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.MEMORY_FREQUENCY) {
              sub.specifications.push(ps.memory_frequency);
              if (ps.memory_frequency) sub.subtitle_chk = true;
            }

            // H A R D ------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.HARD_TYPE_1) {
              sub.specifications.push(ps.hard_type_1);
              if (ps.hard_type_1) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.HARD_CAPACITY_1) {
              sub.specifications.push(ps.hard_capacity_1);
              if (ps.hard_capacity_1) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.HARD_SLOT_1) {
              sub.specifications.push(ps.hard_slot_1);
              if (ps.hard_slot_1) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.HARD_TYPE_2) {
              sub.specifications.push(ps.hard_type_2);
              if (ps.hard_type_2) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.HARD_CAPACITY_2) {
              sub.specifications.push(ps.hard_capacity_2);
              if (ps.hard_capacity_2) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.HARD_SLOT_2) {
              sub.specifications.push(ps.hard_slot_2);
              if (ps.hard_slot_2) sub.subtitle_chk = true;
            }

            // C O N N E C T I V I T Y ----------------------------------------
            if (sub.subtitle == SPECIFICATIONS.CONNECTIVITY_BLUETOOTH) {
              sub.specifications.push(ps.connectivity_bluetooth);
              if (ps.connectivity_bluetooth) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.CONNECTIVITY_WIRELESS) {
              sub.specifications.push(ps.connectivity_wireless);
              if (ps.connectivity_wireless) sub.subtitle_chk = true;
            }

            // G E N E R A L -----------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.TYPE) {
              sub.specifications.push(ps.type);
              if (ps.type) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.MODEL) {
              sub.specifications.push(ps.model);
              if (ps.model) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.CAPACITY) {
              sub.specifications.push(ps.capacity);
              if (ps.capacity) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.CONNECTION) {
              sub.specifications.push(ps.connection);
              if (ps.connection) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.OUTPUT) {
              sub.specifications.push(ps.output);
              if (ps.output) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.COMPATIBILITY) {
              sub.specifications.push(ps.compatibility);
              if (ps.compatibility) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.SCREEN_SIZE) {
              sub.specifications.push(ps.screen_size);
              if (ps.screen_size) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.FREQUENCY) {
              sub.specifications.push(ps.frequency);
              if (ps.frequency) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.POWER) {
              sub.specifications.push(ps.power);
              if (ps.power) sub.subtitle_chk = true;
            }

            // O T H E R -----------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.MATERIAL) {
              sub.specifications.push(ps.material);
              if (ps.material) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.COLOR) {
              sub.specifications.push(ps.color);
              if (ps.color) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.WEIGHT) {
              sub.specifications.push(ps.weight);
              if (ps.weight) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.SPEED) {
              sub.specifications.push(ps.speed);
              if (ps.speed) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.READ_SPEED) {
              sub.specifications.push(ps.read_speed);
              if (ps.read_speed) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.WRITE_SPEED) {
              sub.specifications.push(ps.write_speed);
              if (ps.write_speed) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.HDMI) {
              sub.specifications.push(ps.hdmi);
              if (ps.hdmi) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.SPEAKER) {
              sub.specifications.push(ps.speaker);
              if (ps.speaker) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.RADIATOR) {
              sub.specifications.push(ps.radiator);
              if (ps.radiator) sub.subtitle_chk = true;
            }
            if (sub.subtitle == SPECIFICATIONS.VOLTAGE) {
              sub.specifications.push(ps.voltage);
              if (ps.voltage) sub.subtitle_chk = true;
            }
          }
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
        if (specification.title === SPECIFICATIONS.TITLE_HARD) {
          sub.specifications.find((item: any) => { if (item) specification.title_chk = true; });
        }
        if (specification.title === SPECIFICATIONS.TITLE_CONNECTIVITY) {
          sub.specifications.find((item: any) => { if (item) specification.title_chk = true; });
        }
        if (specification.title === SPECIFICATIONS.TITLE_GENERAL) {
          sub.specifications.find((item: any) => { if (item) specification.title_chk = true; });
        }
        if (specification.title === SPECIFICATIONS.TITLE_OTHER) {
          sub.specifications.find((item: any) => { if (item) specification.title_chk = true; });
        }
      }
    }
  }

}
