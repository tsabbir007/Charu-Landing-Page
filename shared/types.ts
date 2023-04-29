export enum SelectedPage {
    Home = "home",
    Services = "services",
    Products = "products",
    About = "about",
}

export interface ServiceType {
    IsPaid: boolean;
    Title: string;
    Description: string;
    ButtonText: string;
}

export interface FeatureType {
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

export interface MasonryType {
    Title: string;
    Url: string;
    MediaUrl: string;
}

export interface FooterType {
    Title: string;
    Items: string[];
}
