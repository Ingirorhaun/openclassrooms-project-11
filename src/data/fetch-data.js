//import json file
import accommodations from '../data/accommodations.json';

export function getAccommodations() {
    return accommodations;
}

export function getAccommodationById(id) {
    return accommodations.find(accommodation => accommodation.id === id);
}