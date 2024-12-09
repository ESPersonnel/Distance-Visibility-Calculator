export interface VisibilityDetails {
  visibleHeightFromA: number;
  visibleHeightFromB: number;
  percentVisibleFromA: number;
  percentVisibleFromB: number;
}

export interface VisibilityResult extends VisibilityDetails {
  canSeeEachOther: boolean;
  curvatureDip: number;
  visibleRangeA: number;
  visibleRangeB: number;
  distance: number;
  heightA: number;
  heightB: number;
}

export interface FormData {
  distance: number;
  heightA: number;
  heightB: number;
  clearanceA: number;
  clearanceB: number;
}