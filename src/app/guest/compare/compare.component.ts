import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SPECIFICATION, Specification } from 'src/app/shared/data/specification.data';
import { SPECIFICATIONS } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';

const specification = JSON.stringify(SPECIFICATION);

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {

  compares!: Array<Product>;

  screenWidth: any = 1000000;
  minWidth: string = 'min-width: 150px';
  trWidth: string = 'width: 100%';

  specifications: Array<Specification> = [];

  private sub: any;

  constructor(
    private cartService: CartService,
    private compareService: CompareService,
    private location: Location,
  ) {
    this.sub = compareService.getComparesObservable().subscribe(comp => {
      this.compares = comp;
      this.screenWidth = window.innerWidth;
      this.handleWidth();
      this.emptySpecification();
    });
  }

  @HostListener('window:resize', ['$event'])
  handleWidth() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 766) {
      if (this.compares.length === 1) this.trWidth = 'width: 40%';
      if (this.compares.length === 2) this.trWidth = 'width: 60%';
      if (this.compares.length === 3) this.trWidth = 'width: 80%';
      if (this.compares.length === 4) this.trWidth = 'width: 100%';
    }
    else {
      this.trWidth = 'width: 100%';
      if (this.compares.length === 1) this.minWidth = 'min-width: 150px';
      if (this.compares.length === 2) this.minWidth = 'min-width: 300px';
      if (this.compares.length === 3) this.minWidth = 'min-width: 500px';
      if (this.compares.length === 4) this.minWidth = 'min-width: 600px';
    }
  }

  emptySpecification() {
    this.specifications = JSON.parse(specification);
    for (let spec of this.specifications) {
      for (let sub of spec.subtitles) {
        sub.specifications = [];

        for (let product of this.compares) {
          for (let ps of product.specifications) {
            // FILL ARRAY WITH VALUES
            // D I S P L A Y ---------------------------------------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.DISPLAY_SIZE) sub.specifications.push(ps.display_size);
            if (sub.subtitle == SPECIFICATIONS.DISPLAY_FREQUENCY) sub.specifications.push(ps.display_frequency);
            if (sub.subtitle == SPECIFICATIONS.DISPLAY_TOUCH) sub.specifications.push(ps.display_touch);

            // M O T H E R B O A R D -------------------------------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_BRAND) sub.specifications.push(ps.motherboard_brand);
            if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_CHIPSET) sub.specifications.push(ps.motherboard_chipset);
            if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_SLOT) sub.specifications.push(ps.motherboard_slot);
            if (sub.subtitle == SPECIFICATIONS.MOTHERBOARD_AUDIO) sub.specifications.push(ps.motherboard_audio);

            // P R O C E S S O R -----------------------------------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.PROCESSOR_BRAND) sub.specifications.push(ps.processor_brand);
            if (sub.subtitle == SPECIFICATIONS.PROCESSOR_TYPE) sub.specifications.push(ps.processor_type);
            if (sub.subtitle == SPECIFICATIONS.PROCESSOR_MODEL) sub.specifications.push(ps.processor_model);
            if (sub.subtitle == SPECIFICATIONS.PROCESSOR_FREQUENCY) sub.specifications.push(ps.processor_frequency);

            // M E M O R Y -----------------------------------------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.MEMORY_TYPE) sub.specifications.push(ps.memory_type);
            if (sub.subtitle == SPECIFICATIONS.MEMORY_CAPACITY) sub.specifications.push(ps.memory_capacity);
            if (sub.subtitle == SPECIFICATIONS.MEMORY_FREQUENCY) sub.specifications.push(ps.memory_frequency);

            // H A R D ---------------------------------------------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.HARD_TYPE_1) sub.specifications.push(ps.hard_type_1);
            if (sub.subtitle == SPECIFICATIONS.HARD_CAPACITY_1) sub.specifications.push(ps.hard_capacity_1);
            if (sub.subtitle == SPECIFICATIONS.HARD_SLOT_1) sub.specifications.push(ps.hard_slot_1);
            if (sub.subtitle == SPECIFICATIONS.HARD_TYPE_2) sub.specifications.push(ps.hard_type_2);
            if (sub.subtitle == SPECIFICATIONS.HARD_CAPACITY_2) sub.specifications.push(ps.hard_capacity_2);
            if (sub.subtitle == SPECIFICATIONS.HARD_SLOT_2) sub.specifications.push(ps.hard_slot_2);

            // C O N N E C T I V I T Y -----------------------------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.CONNECTIVITY_BLUETOOTH) sub.specifications.push(ps.connectivity_bluetooth);
            if (sub.subtitle == SPECIFICATIONS.CONNECTIVITY_WIRELESS) sub.specifications.push(ps.connectivity_wireless);

            // G E N E R A L ---------------------------------------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.BRAND) sub.specifications.push(ps.brand);
            if (sub.subtitle == SPECIFICATIONS.TYPE) sub.specifications.push(ps.type);
            if (sub.subtitle == SPECIFICATIONS.MODEL) sub.specifications.push(ps.model);
            if (sub.subtitle == SPECIFICATIONS.CAPACITY) sub.specifications.push(ps.capacity);
            if (sub.subtitle == SPECIFICATIONS.CONNECTION) sub.specifications.push(ps.connection);
            if (sub.subtitle == SPECIFICATIONS.OUTPUT) sub.specifications.push(ps.output);
            if (sub.subtitle == SPECIFICATIONS.COMPATIBILITY) sub.specifications.push(ps.compatibility);
            if (sub.subtitle == SPECIFICATIONS.SCREEN_SIZE) sub.specifications.push(ps.screen_size);
            if (sub.subtitle == SPECIFICATIONS.FREQUENCY) sub.specifications.push(ps.frequency);
            if (sub.subtitle == SPECIFICATIONS.POWER) sub.specifications.push(ps.power);

            // O T H E R -------------------------------------------------------------------------------------------
            if (sub.subtitle == SPECIFICATIONS.MATERIAL) sub.specifications.push(ps.material);
            if (sub.subtitle == SPECIFICATIONS.COLOR) sub.specifications.push(ps.color);
            if (sub.subtitle == SPECIFICATIONS.WEIGHT) sub.specifications.push(ps.weight);
            if (sub.subtitle == SPECIFICATIONS.SPEED) sub.specifications.push(ps.speed);
            if (sub.subtitle == SPECIFICATIONS.READ_SPEED) sub.specifications.push(ps.read_speed);
            if (sub.subtitle == SPECIFICATIONS.WRITE_SPEED) sub.specifications.push(ps.write_speed);
            if (sub.subtitle == SPECIFICATIONS.HDMI) sub.specifications.push(ps.hdmi);
            if (sub.subtitle == SPECIFICATIONS.SPEAKER) sub.specifications.push(ps.speaker);
            if (sub.subtitle == SPECIFICATIONS.RADIATOR) sub.specifications.push(ps.radiator);
            if (sub.subtitle == SPECIFICATIONS.VOLTAGE) sub.specifications.push(ps.voltage);
          }
        }
      }
    }

    // 1) IF ANY VALUE IN SPECIFICATION ==>> SUBTITLE_CHK = TRUE; 2) IF SUBTITLE_CHK = FALSE ==>> THAT SPECIFICATION IS REMOVED;
    let subtitle_chk: boolean;
    for (let spec of this.specifications) {
      for (let sub of spec.subtitles) {
        subtitle_chk = false;
        sub.specifications.find(item => { if (item) subtitle_chk = true });
        if (subtitle_chk == false) {
          spec.subtitles = spec.subtitles.filter(item => item.subtitle != sub.subtitle);
        }
      }
    }

    // 1) IF EMPTY SUBTITLES ==>> THAT SUBTITLES IS REMOVED;
    for (let spec of this.specifications) {
      if (!spec.subtitles.length) {
        this.specifications = this.specifications.filter(item => item.title != spec.title);
      }
    }
    // console.log(this.specifications);
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
