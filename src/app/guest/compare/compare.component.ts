import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SpecificTitle, SpecificSubtitle } from 'src/app/shared/data/specification.data';
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

  screenWidth: any = 10000;
  minWidth: string = 'min-width: 150px';
  trWidth: string = 'width: 100%';

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

  specifics: Array<SpecificTitle> = [];
  specificTitle: SpecificTitle = new SpecificTitle();
  specificSubtitle: SpecificSubtitle = new SpecificSubtitle();

  emptySpecification() {
    // D I S P L A Y  ====================================================================================
    // DISPLAY_SIZE ------------------------------------------------------------------------
    this.specificTitle = new SpecificTitle();
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.display_size);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.DISPLAY_SIZE;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_DISPLAY;
    }

    // DISPLAY_FREQUENCY ---------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.display_frequency);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.DISPLAY_FREQUENCY;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_DISPLAY;
    }

    // DISPLAY_RESOLUTION ---------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.display_resolution);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.DISPLAY_RESOLUTION;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_DISPLAY;
    }

    // DISPLAY_TOUCH -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.display_touch);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.DISPLAY_TOUCH;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_DISPLAY;
    }

    // -------------------------------------
    this.specifics.push(this.specificTitle);

    // M O T H E R B O A R D  =============================================================================
    // MOTHERBOARD_BRAND ------------------------------------------------------------------------
    this.specificTitle = new SpecificTitle();
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.motherboard_brand);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MOTHERBOARD_BRAND;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_MOTHERBOARD;
    }

    // MOTHERBOARD_CHIPSET ---------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.motherboard_chipset);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MOTHERBOARD_CHIPSET;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_MOTHERBOARD;
    }

    // MOTHERBOARD_SLOT ---------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.motherboard_slot);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MOTHERBOARD_SLOT;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_MOTHERBOARD;
    }

    // MOTHERBOARD_AUDIO -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.motherboard_audio);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MOTHERBOARD_AUDIO;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_MOTHERBOARD;
    }

    // -------------------------------------
    this.specifics.push(this.specificTitle);

    // P R O C E S S O R  =================================================================================
    // PROCESSOR_BRAND -------------------------------------------------------------------------
    this.specificTitle = new SpecificTitle();
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.processor_brand);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.PROCESSOR_BRAND;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_PROCESSOR;
    }

    // PROCESSOR_TYPE -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.processor_type);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.PROCESSOR_TYPE;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_PROCESSOR;
    }

    // PROCESSOR_MODEL -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.processor_model);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.PROCESSOR_MODEL;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_PROCESSOR;
    }

    // PROCESSOR_TYPE -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.processor_frequency);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.PROCESSOR_FREQUENCY;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_PROCESSOR;
    }

    // -------------------------------------
    this.specifics.push(this.specificTitle);

    // M E M O R Y  =======================================================================================
    // PROCESSOR_BRAND -------------------------------------------------------------------------
    this.specificTitle = new SpecificTitle();
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.memory_type);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MEMORY_TYPE;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_MEMORY;
    }

    // PROCESSOR_TYPE -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.memory_capacity);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MEMORY_CAPACITY;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_MEMORY;
    }

    // PROCESSOR_MODEL -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.memory_frequency);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MEMORY_FREQUENCY;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_MEMORY;
    }

    // -------------------------------------
    this.specifics.push(this.specificTitle);

    // H A R D  ==============================================================================================
    // HARD_TYPE_1 -------------------------------------------------------------------------
    this.specificTitle = new SpecificTitle();
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.hard_type_1);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.HARD_TYPE_1;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_HARD;
    }

    // HARD_CAPACITY_1 -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.hard_capacity_1);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.HARD_CAPACITY_1;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_HARD;
    }

    // HARD_SLOT_1 -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.hard_slot_1);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.HARD_SLOT_1;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_HARD;
    }

    // HARD_TYPE_2 -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.hard_type_2);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.HARD_TYPE_2;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_HARD;
    }

    // HARD_CAPACITY_2 -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.hard_capacity_2);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.HARD_CAPACITY_2;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_HARD;
    }

    // HARD_SLOT_2 -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.hard_slot_2);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.HARD_SLOT_2;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_HARD;
    }

    // -------------------------------------
    this.specifics.push(this.specificTitle);

    // C O N N E C T I V I T Y  ======================================================================================
    // CONNECTIVITY_BLUETOOTH -------------------------------------------------------------------------
    this.specificTitle = new SpecificTitle();
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.connectivity_bluetooth);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.CONNECTIVITY_BLUETOOTH;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_CONNECTIVITY;
    }

    // CONNECTIVITY_WIRELESS -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.connectivity_wireless);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.CONNECTIVITY_WIRELESS;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_CONNECTIVITY;
    }

    // -------------------------------------
    this.specifics.push(this.specificTitle);

    // G E N E R A L  ==============================================================================================
    // BRAND -------------------------------------------------------------------------
    this.specificTitle = new SpecificTitle();
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.brand);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.BRAND;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // TYPE -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.type);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.TYPE;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // MODEL -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.model);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MODEL;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // CAPACITY -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.capacity);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.CAPACITY;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // CONNECTION -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.connection);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.CONNECTION;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // OUTPUT -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.output);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.OUTPUT;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // COMPATIBILITY -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.compatibility);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.COMPATIBILITY;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // SCREEN_SIZE -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.screen_size);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.SCREEN_SIZE;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // FREQUENCY -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.frequency);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.FREQUENCY;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // POWER -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.power);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.POWER;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_GENERAL;
    }

    // -------------------------------------
    this.specifics.push(this.specificTitle);

    // O T H E R  ===========================================================================================
    // MATERIAL -------------------------------------------------------------------------
    this.specificTitle = new SpecificTitle();
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.material);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.MATERIAL;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // COLOR -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.color);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.COLOR;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // WEIGHT -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.weight);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.WEIGHT;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // SPEED -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.speed);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.SPEED;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // READ_SPEED -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.read_speed);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.READ_SPEED;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // WRITE_SPEED -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.write_speed);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.WRITE_SPEED;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // HDMI -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.hdmi);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.HDMI;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // SPEAKER -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.speaker);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.SPEAKER;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // RADIATOR -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.radiator);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.RADIATOR;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // VOLTAGE -------------------------------------------------------------------------
    this.specificSubtitle = new SpecificSubtitle();
    for (let product of this.compares) {
      for (let ps of product.specifications) {
        this.specificSubtitle.specifications.push(ps.voltage);
      }
    }
    this.specificSubtitle.specifications.find((item: any) => {
      if (item) this.specificSubtitle.subtitle = SPECIFICATIONS.VOLTAGE;
    });
    if (this.specificSubtitle.subtitle) {
      this.specificTitle.subtitles.push(this.specificSubtitle);
      this.specificTitle.title = SPECIFICATIONS.TITLE_OTHER;
    }

    // -------------------------------------
    this.specifics.push(this.specificTitle);

    // console.log(this.specifics);
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
