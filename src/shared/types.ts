export enum SelectedPage{
    Home = "home",
    About = "about",
    Contact = "contact",
    SignUp = "signup",
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