import type { ImgHTMLAttributes } from "react";

export interface ResponsivePictureSource {
  srcSet: string;
  type: string;
  sizes?: string;
}

export interface ResponsivePictureProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  alt: string;
  src: string;
  sources?: ResponsivePictureSource[];
}

export function ResponsivePicture({ alt, src, sources, loading = "lazy", ...imgProps }: ResponsivePictureProps) {
  return (
    <picture>
      {sources?.map((source) => (
        <source key={`${source.type}:${source.srcSet}`} type={source.type} srcSet={source.srcSet} sizes={source.sizes} />
      ))}
      <img src={src} alt={alt} loading={loading} {...imgProps} />
    </picture>
  );
}
