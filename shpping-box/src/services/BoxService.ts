import { type Box } from '../types/Box';

const STORAGE_KEY = 'shipping_boxes';


// Service layer for API endpoints
// Currently uses localStorage for persistence
//  Can be easily replaced with actual API calls

class BoxService {
  // Save box endpoint
  async saveBox(box: Box): Promise<Box> {
    try {
      const boxes = this.getBoxesFromStorage();
      boxes.push(box);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(boxes));
      return box;
    } catch (error) {
      throw new Error('Failed to save box');
    }
  }

  // Get all boxes endpoint
  async getAllBoxes(): Promise<Box[]> {
    try {
      return this.getBoxesFromStorage();
    } catch (error) {
      throw new Error('Failed to retrieve boxes');
    }
  }

  // Helper method to get boxes from storage
  private getBoxesFromStorage(): Box[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }
}

export const boxService = new BoxService();

