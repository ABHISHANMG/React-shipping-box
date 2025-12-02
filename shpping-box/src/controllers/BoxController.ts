import { type Box, COUNTRY_MULTIPLIERS } from '../types/Box';
import { boxService } from '../services/BoxService';

class BoxController {
  // Calculate shipping cost based on weight and destination
  calculateShippingCost(weight: number, destination: string): number {
    const multiplier = COUNTRY_MULTIPLIERS[destination];
    return weight * multiplier;
  }

  // Save a new box
  async saveBox(boxData: Omit<Box, 'id' | 'shippingCost'>): Promise<Box> {
    const shippingCost = this.calculateShippingCost(
      boxData.weight,
      boxData.destinationCountry
    );

    const newBox: Box = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...boxData,
      shippingCost,
    };

    // Use service to persist
    await boxService.saveBox(newBox);
    return newBox;
  }

  // Get all boxes
  async getAllBoxes(): Promise<Box[]> {
    return await boxService.getAllBoxes();
  }

  // Get box by ID
  async getBoxById(id: string): Promise<Box | undefined> {
    const boxes = await this.getAllBoxes();
    return boxes.find((box) => box.id === id);
  }
}

// Export singleton instance
export const boxController = new BoxController();

