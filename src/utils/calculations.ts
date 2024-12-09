import { VisibilityResult, VisibilityDetails } from '../types';

const EYELINE_OFFSET = 0.1; // 10cm below total height for eyeline

export const calculateVisibleHeight = (
  distance: number,
  observerHeight: number,
  targetHeight: number,
  R: number
): number => {
  const horizontalDistance = Math.sqrt(2 * R * observerHeight);
  
  if (distance <= horizontalDistance) {
    return targetHeight; // Can see entire height
  }

  const heightHidden = ((distance ** 2) / (2 * R)) - observerHeight;
  return Math.max(0, targetHeight - heightHidden);
};

export const calculateVisibilityDetails = (
  distance: number,
  heightA: number,
  heightB: number
): VisibilityDetails => {
  const R = 6371000; // Earth's radius in meters
  
  const visibleHeightFromA = calculateVisibleHeight(distance, heightA, heightB, R);
  const visibleHeightFromB = calculateVisibleHeight(distance, heightB, heightA, R);
  
  const percentVisibleFromA = (visibleHeightFromA / heightB) * 100;
  const percentVisibleFromB = (visibleHeightFromB / heightA) * 100;

  return {
    visibleHeightFromA,
    visibleHeightFromB,
    percentVisibleFromA,
    percentVisibleFromB
  };
};

export const calculateVisibility = (
  distance: number,
  heightA: number = 1.8,
  heightB: number = 1.8,
  clearanceA: number = 0,
  clearanceB: number = 0
): VisibilityResult => {
  const R = 6371000; // Earth's radius in meters

  const totalHeightA = heightA + clearanceA - EYELINE_OFFSET;
  const totalHeightB = heightB + clearanceB - EYELINE_OFFSET;

  const curvatureDip = (distance ** 2) / (2 * R);
  const visibleRangeA = Math.sqrt(2 * R * totalHeightA);
  const visibleRangeB = Math.sqrt(2 * R * totalHeightB);
  const canSeeEachOther = visibleRangeA + visibleRangeB >= distance;

  const visibilityDetails = calculateVisibilityDetails(distance, totalHeightA, totalHeightB);

  return {
    canSeeEachOther,
    curvatureDip,
    visibleRangeA,
    visibleRangeB,
    distance,
    heightA: totalHeightA,
    heightB: totalHeightB,
    ...visibilityDetails
  };
};