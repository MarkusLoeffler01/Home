declare module "react-full-page" {
    type ControlComponentsProps = {
      getCurrentSlideIndex: () => number;
      onNext: () => void;
      onPrev: () => void;
      scrollToSlide: (n: number) => void;
      slidesCount: number;
    };

    type AfterChangeProps = {
      from: number;
      to: number;
    };
  
    type FullPageProps = {
      initialSlide?: number;
      duration?: number;
      controls?: boolean | React.FC<ControlComponentsProps>;
      controlProps?: any;
      beforeChange?: (x: AfterChangeProps) => void;
      afterChange?: (x: AfterChangeProps) => void;
      scrollMode?: "full-page" | "normal";
      children?: React.ReactNode
    };
    export const FullPage: React.FC<FullPageProps>;
  
    export const Slide: React.FC<Props>;
  }

