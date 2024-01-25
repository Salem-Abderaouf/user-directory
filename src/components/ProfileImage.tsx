interface ImageProps {
    src: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    alt: string; 
}

const ProfileImage = ({ src, alt }: ImageProps) => {
  console.log(src)
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={`${src.large}`} className="object-fill w-full h-96"/>
      <source media="(min-width: 768px)" srcSet={`${src.medium}`}  className="object-fill w-full h-56"/>
      <img src={`${src.thumbnail}`} loading="lazy" alt={alt} className="object-fill w-full h-32"
      />
    </picture>
  );
};

export default ProfileImage;