export enum SelectedPage {
  Home = "home",
  Features = "features",
  Templates = "templates",
  Blogs = "blogs",
  Charu = "https://play.google.com/store/apps/details?id=app.charu.graphic_design_photo_editor&hl=en&gl=US",
}

export interface ServiceType {
  IsPaid: boolean;
  Title: string;
  Description: string;
  ButtonText: string;
}

export interface FeatureType {
  IsVideoUrl: boolean;
  MediaUrl: any;
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
  MediaUrl: any;
}

export interface FooterType {
  Title: string;
  Items: {
    Name: string;
    IsUpcomming: boolean;
    Url: string;
  }[];
}



export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    node: {
      mediaDetails: {
        file: string;
        sizes: {
          sourceUrl: string;
          width: number;
          height: number;
        }[];
      };
    };
  };
}






