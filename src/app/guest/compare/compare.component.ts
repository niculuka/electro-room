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
    this.specifications = [];
    for (let product of this.compares) {
      this.specifications = this.specifications.concat(product.specifications);
    }
    this.specification = new ProductSpecification();
    this.specifications.find(item => {
      if (item.display_size) this.specification.display_size = item.display_size;
      if (item.display_frequency) this.specification.display_frequency = item.display_frequency;
      if (item.display_touch) this.specification.display_touch = item.display_touch;

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

      if (item.hard_type_1) this.specification.hard_type_1 = item.hard_type_1;
      if (item.hard_capacity_1) this.specification.hard_capacity_1 = item.hard_capacity_1;
      if (item.hard_slot_1) this.specification.hard_slot_1 = item.hard_slot_1;
      if (item.hard_type_2) this.specification.hard_type_2 = item.hard_type_2;
      if (item.hard_capacity_2) this.specification.hard_capacity_2 = item.hard_capacity_2;
      if (item.hard_slot_2) this.specification.hard_slot_2 = item.hard_slot_2;

      if (item.connectivity_bluetooth) this.specification.connectivity_bluetooth = item.connectivity_bluetooth;
      if (item.connectivity_wireless) this.specification.connectivity_wireless = item.connectivity_wireless;

      if (item.type) this.specification.type = item.type;
      if (item.model) this.specification.model = item.model;
      if (item.capacity) this.specification.capacity = item.capacity;
      if (item.connection) this.specification.connection = item.connection;
      if (item.output) this.specification.output = item.output;
      if (item.compatibility) this.specification.compatibility = item.compatibility;
      if (item.screen_size) this.specification.screen_size = item.screen_size;
      if (item.frequency) this.specification.frequency = item.frequency;
      if (item.power) this.specification.power = item.power;

      if (item.material) this.specification.material = item.material;
      if (item.color) this.specification.color = item.color;
      if (item.weight) this.specification.weight = item.weight;
      if (item.speed) this.specification.speed = item.speed;
      if (item.read_speed) this.specification.read_speed = item.read_speed;
      if (item.write_speed) this.specification.write_speed = item.write_speed;
      if (item.hdmi) this.specification.hdmi = item.hdmi;
      if (item.speaker) this.specification.speaker = item.speaker;
      if (item.radiator) this.specification.radiator = item.radiator;
      if (item.voltage) this.specification.voltage = item.voltage;
    })
    if (this.specification.display_size || this.specification.display_frequency || this.specification.display_touch) {
      this.title.display = true;
    } else { this.title.display = false; }
    if (this.specification.motherboard_brand || this.specification.motherboard_chipset || this.specification.motherboard_slot || this.specification.motherboard_audio) {
      this.title.motherboard = true;
    } else { this.title.motherboard = false; }
    if (this.specification.processor_brand || this.specification.processor_type || this.specification.processor_model || this.specification.processor_frequency) {
      this.title.processor = true;
    } else { this.title.processor = false; }
    if (this.specification.memory_type || this.specification.memory_capacity || this.specification.memory_frequency) {
      this.title.memory = true;
    } else { this.title.memory = false; }
    if (this.specification.hard_type_1 || this.specification.hard_capacity_1 || this.specification.hard_slot_1 || this.specification.hard_type_2 || this.specification.hard_capacity_2 || this.specification.hard_slot_2) {
      this.title.hard = true;
    } else { this.title.hard = false; }
    if (this.specification.connectivity_bluetooth || this.specification.connectivity_wireless) {
      this.title.connectivity = true;
    } else { this.title.connectivity = false; }
    if (this.specification.type || this.specification.model || this.specification.capacity || this.specification.connection || this.specification.output || this.specification.compatibility || this.specification.screen_size || this.specification.frequency || this.specification.power) {
      this.title.general = true;
    } else { this.title.general = false; }
    if (this.specification.material || this.specification.color || this.specification.weight || this.specification.speed || this.specification.read_speed || this.specification.write_speed || this.specification.hdmi || this.specification.speaker || this.specification.radiator || this.specification.voltage) {
      this.title.others = true;
    } else { this.title.others = false; }
    // console.log(this.compares)
    // console.log(this.specification)
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
