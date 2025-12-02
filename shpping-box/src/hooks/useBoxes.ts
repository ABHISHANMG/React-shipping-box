import { useState, useEffect } from 'react';
import { type Box } from '../types/Box';
import { boxController } from '../controllers/BoxController';

export const useBoxes = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [loading, setLoading] = useState(false);

  // Load boxes from controller
  const loadBoxes = async () => {
    setLoading(true);
    try {
      const allBoxes = await boxController.getAllBoxes();
      setBoxes(allBoxes);
    } catch (error) {
      console.error('Failed to load boxes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Save a new box
  const saveBox = async (boxData: Omit<Box, 'id' | 'shippingCost'>) => {
    try {
      const newBox = await boxController.saveBox(boxData);
      setBoxes((prev) => [...prev, newBox]);
      return newBox;
    } catch (error) {
      console.error('Failed to save box:', error);
      throw error;
    }
  };

  // Initialize boxes on mount
  useEffect(() => {
    loadBoxes();
  }, []);

  return {
    boxes,
    saveBox,
    loadBoxes,
    loading,
  };
};

