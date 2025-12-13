import Image from 'next/image';

const logos = [
  { src: '/images/logos/second-skin.svg', alt: 'Second Skin' },
  { src: '/images/logos/buzzfeed.svg', alt: 'Buzzfeed' },
  { src: '/images/logos/washinton-post.svg', alt: 'Washington Post' },
  { src: '/images/logos/opb.svg', alt: 'OPB' },
  { src: '/images/logos/tattrx.png', alt: 'Tattrx' },
  { src: '/images/logos/10-news.svg', alt: '10 News' },
  { src: '/images/logos/tattoodo.png', alt: 'Tattoodo' },
];

export default function LogoGrid() {
  return (
    <section className="logo-grid-component">
      <div className="container">
        <h2 className="logo-grid-title">Publications Ruby&apos;s been featured in:</h2>
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <Image src={logo.src} alt={logo.alt} width={100} height={60} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

