import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from '../cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}
  populateDB() {

    this.carsService.fillCarsWithData(CARS_SEED);
    this.brandsService.fillBrandsWithData(BRANDS_SEED);
    return 'Seed executed successfully';
  }
}
