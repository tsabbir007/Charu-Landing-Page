export enum SelectedPage {
    Home = "home",
    Services = "service",
    Products = "products",
}

export interface FeatureType {
    IsPaid: boolean;
    Title: string;
    Description: string;
    ButtonText: string;
}

export interface ServiceType {
    IsVideoUrl: boolean;
    MediaUrl: string;
    Title: string;
    Description: string;
    ButtonText: string;
}

export interface CarouselType {
    Title: string;
    Url: string;
    Description: string;
    MediaUrl: string;
}