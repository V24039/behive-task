export type IPropertyDetails = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: null;
  rules: null;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string;
  facilities: null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: { [key: string]: IDayPassDiscountsPercentage };
  manager_id: null;
  can_edit?: boolean;
}

export type IDayPassDiscountsPercentage = {
  value: number;
  message: string;
}

export type IAction = {
  type: string
  payload?: Array<IPropertyDetails>
}