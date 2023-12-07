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

  title: SpecificationTitle = new SpecificationTitle();
  specification: ProductSpecification = new ProductSpecification();
  specifications: Array<ProductSpecification> = [];

  private sub: any;

  constructor(
    private cartService: CartService,
    private compareService: CompareService,
    private location: Location,
  ) {
    this.sub = compareService.getComparesObservable().subscribe(comp => {
      this.compares = comp;
      this.isSpecificationsEmpty();
    });
  }

  isSpecificationsEmpty() {
    for (let product of this.compares) {
      this.specifications = this.specifications.concat(product.specifications);
    }
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
      this.title.display = "ECRAN";
    }
    if (this.specification.motherboard_brand || this.specification.motherboard_chipset || this.specification.motherboard_slot || this.specification.motherboard_audio) {
      this.title.motherboard = "PLACA DE BAZA";
    }
    if (this.specification.processor_brand || this.specification.processor_type || this.specification.processor_model || this.specification.processor_frequency) {
      this.title.processor = "PROCESOR";
    }
    if (this.specification.memory_type || this.specification.memory_capacity || this.specification.memory_frequency) {
      this.title.memory = "MEMORIE RAM";
    }
    if (this.specification.hard_type_1 || this.specification.hard_capacity_1 || this.specification.hard_slot_1 || this.specification.hard_type_2 || this.specification.hard_capacity_2 || this.specification.hard_slot_2) {
      this.title.hard = "STOCARE";
    }
    if (this.specification.connectivity_bluetooth || this.specification.connectivity_wireless) {
      this.title.connectivity = "COMUNICATII";
    }
    if (this.specification.type || this.specification.model || this.specification.capacity || this.specification.connection || this.specification.output || this.specification.compatibility || this.specification.screen_size || this.specification.frequency || this.specification.power) {
      this.title.general = "CARACTERISTICI GENERALE";
    }
    if (this.specification.material || this.specification.color || this.specification.weight || this.specification.speed || this.specification.read_speed || this.specification.write_speed || this.specification.hdmi || this.specification.speaker || this.specification.radiator || this.specification.voltage) {
      this.title.others = "ALTELE";
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
